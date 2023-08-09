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
      </Head>
      <TodosState />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const todosCollection = db.collection("todos");
  const result = await todosCollection.find().toArray();
  const activeTodos = [];
  const completedTodos = [];
  client.close();
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
}
