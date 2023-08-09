import TodosState from "@/components/Todos/TodosState";
import { todoActions } from "@/store/todo-slice";
import { MongoClient } from "mongodb";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Head from "next/head";

export default function Home({ activeTodos, completedTodos }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoActions.setTodos({ activeTodos, completedTodos }));
  }, [activeTodos, completedTodos, dispatch]);
  return (
    <>
      <Head>
        <title>Todo-Daivik</title>
        <meta name="todos" content="Todo App with better functionality" />
        <link
          rel="icon"
          href="https://preview.redd.it/ema88ke10w321.jpg?auto=webp&s=08005d9c57455cdcff385debda53d756953f1fbf"
        />
      </Head>
      <TodosState />
    </>
  );
}

export async function getServerSideProps() {
  let client;
  try {
    client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    const todosCollection = db.collection("todos");
    const result = await todosCollection.find().toArray();
    const activeTodos = [];
    const completedTodos = [];

    result.forEach((todo) => {
      if (todo.status === "Active") {
        activeTodos.push({ ...todo, _id: todo._id.toString() }); // Convert _id to string
      } else {
        completedTodos.push({ ...todo, _id: todo._id.toString() }); // Convert _id to string
      }
    });

    return {
      props: {
        activeTodos,
        completedTodos,
      },
    };
  } catch (error) {
    console.error("Error fetching todos:", error);
    return {
      props: {
        activeTodos: [],
        completedTodos: [],
      },
    };
  } finally {
    if (client) {
      client.close();
    }
  }
}
