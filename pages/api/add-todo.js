import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  try {
    if (req.method === "POST") {
      const data = req.body;
      const db = client.db();
      const todosCollection = db.collection("todos");
      const result = await todosCollection.insertOne(data);
      client.close();
      res
        .status(201)
        .json({ success: true, message: "Todos inserted!", todoItem: result });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to add todo" });
  } finally {
    client.close();
  }
}

export default handler;
