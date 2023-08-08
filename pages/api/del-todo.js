const { MongoClient, ObjectId } = require("mongodb");

async function handler(req, res) {
  let success = false;
  let message = "Something went wrong";
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  const todosCollection = db.collection("todos");
  try {
    if (req.method === "POST") {
      const todoId = req.body.todoId;
      const result = await todosCollection.deleteOne({
        _id: new ObjectId(todoId),
      });
      if (result.deletedCount === 1) {
        success = true;
        message = "Successfully deleted todos";
      } else {
        message = "Failed to delete the message";
      }
    }
  } catch (error) {
    success = false;
    message = "Something went wrong";
  } finally {
    client.close();
    return res.json({ success, message });
  }
}

export default handler;
