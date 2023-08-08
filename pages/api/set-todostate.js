import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  try {
    if (req.method === "PUT") {
      const todoId = req.body.todoId;
      const status = req.body.status;
      const todosCollection = db.collection("todos");
      await todosCollection.findOneAndUpdate(
        { _id: new ObjectId(todoId) },
        { $set: { status: status } },
        { returnOriginal: false }
      );
      res.status(201).json({
        success: true,
        message: "Todos Status Changed!",
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to Change todo Status" });
  } finally {
    client.close();
  }
}

export default handler;
