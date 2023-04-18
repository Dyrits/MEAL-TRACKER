import { collection } from "../data/database.js";

// @TODO: Remove the data parameter and only use the name parameter with the collection function.
const create$controller = (data, name, options) => ({
  get: {
    all: async (request, response) => {
      // @TODO: Replace $data with data once the data parameter is removed.
      const $data = await collection(name).find({}).toArray();
      return response.json($data);
    }
  },
  search: (request, response) => {
    const { query } = request.query;
    const keys = options.search.map(key => key.split("."));
    const results = data.filter(item => {
      for (const key of keys) {
        let value = item;
        for (const part of key) {
          value = value[part];
        }
        if (value && value.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    return response.json(results);
  },
  create: async ({ body }, response) => {
    try {
      await collection(name).insertOne(body);
      // @TODO: Replace $data with data once the data parameter is removed.
      const $data = await collection(name).find({}).toArray();
      return response.json($data);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: "The request body contains invalid data." });
    }
  },
  update: ({ body, params }, response) => {
    const item = data.find(item => item.id === params.id);
    for (const key in body) {
      if (item.hasOwnProperty(key)) {
        item[key] = key === "date" ? new Date(body[key]) : body[key];
      }
    }
    return response.json(data);
  },
  delete: ({ params }, response) => {
    const index = data.findIndex(item => item.id === params.id);
    data.splice(index, 1);
    return response.json(data);
  }
});

export default create$controller;
