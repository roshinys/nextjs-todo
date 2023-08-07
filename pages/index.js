import TodosState from "@/components/Todos/TodosState";
import { Provider } from "react-redux";
import store from "@/store/store";

// const DUMMY_TODOS = [
//   {
//     id: 1,
//     task: "Eat",
//   },
//   {
//     id: 2,
//     task: "Sleep",
//   },
//   {
//     id: 3,
//     task: "Study",
//   },
//   {
//     id: 4,
//     task: "Drink",
//   },
// ];

export default function Home() {
  return <TodosState activeTodos={[]} completedTodos={[]} />;
}

export function getStaticProps() {
  return {
    props: {
      todos: [],
    },
  };
}
