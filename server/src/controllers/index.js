import { v4 as uuid } from "uuid";

const create$controller = data  => ({
  get: {
    all: (request, response) => {
      response.json(data);
    }
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
  }
});

export default create$controller;
