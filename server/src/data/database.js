import { MongoClient } from "mongodb";

let database;

export const connect = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    maxPoolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.info("Connected to MongoDB~");
  database = await client.db(process.env.MONGO_DB);
  return database;
};

export const collection = (name) => database.collection(name);
