import { ObjectId } from "mongodb";

import { collection } from "../data/database.js";

const create$controller = (name, options) => ({
  get: {
    all: async (request, response) => {
      const data = await collection(name).find({}).toArray();
      return response.json(data);
    }
  },
  search: async (request, response) => {
    const { query } = request.query;
    const keys = options.search.map(key => key.split("."));
    const data = await collection(name).find({}).toArray();
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
      const data = await collection(name).find({}).toArray();
      return response.json(data);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: "The request body contains invalid data." });
    }
  },
  update: async ({ body, params }, response) => {
    const _id = new ObjectId(params.id);
    const item = await collection(name).findOne({ _id });
    for (const key in body) {
      if (item.hasOwnProperty(key)) {
        item[key] = key === "date" ? new Date(body[key]) : body[key];
      }
    }
    await collection(name).updateOne({ _id }, { $set: item });
    const data = await collection(name).find({}).toArray();
    return response.json(data);
  },
  delete: async ({ params }, response) => {
    const _id = new ObjectId(params.id);
    await collection(name).deleteOne({ _id });
    const data = await collection(name).find({}).toArray();
    return response.json(data);
  }
});

export default create$controller;
