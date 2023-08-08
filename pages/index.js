import TodosState from "@/components/Todos/TodosState";

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
