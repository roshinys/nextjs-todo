import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client = null;
  try {
    client = await MongoClient.connect(process.env.MONGO_URI);
    if (req.method === "POST") {
      const data = req.body;
      const db = client.db();
      const todosCollection = db.collection("todos");
      const result = await todosCollection.insertOne(data);
      res
        .status(201)
        .json({ success: true, message: "Todos inserted!", todoItem: result });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to add todo" });
  } finally {
    if (client) {
      client.close();
    }
  }
}

export default handler;
