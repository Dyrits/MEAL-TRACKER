import { v4 as uuid } from "uuid";

const create$controller = (data, options) => ({
  get: {
    all: (request, response) => {
      response.json(data);
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
        if (value && value.toLowerCase().includes(query.toLowerCase())) { return true; }
      }
      return false;
    });
    return response.json(results);
  },
  create: ({ body }, response) => {
    const data$keys = Object.keys(data[0]).sort();
    // If the data has an id, then we need to generate a new id for the new item~
    body = { id: uuid(), ...body };
    const body$keys = Object.keys(body).sort();
    // If the item has the same keys as the data, then we can add it to the data~
    if (JSON.stringify(body$keys) === JSON.stringify(data$keys)) {
      data.push(body);
      return response.json(data);
    }
    // Otherwise, we need to return an error~
    return response.status(400).json({ error: "The request body contains invalid data." });
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
