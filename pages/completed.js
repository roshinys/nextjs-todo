import Todos from "@/components/Todos/Todos";

const DUMMY_TODOS = [
  {
    id: 1,
    task: "Eat",
  },
  {
    id: 2,
    task: "Sleep",
  },
  {
    id: 3,
    task: "Study",
  },
  {
    id: 4,
    task: "Drink",
  },
  {
    id: 5,
    task: "completed",
  },
];

export default function CompletedTodos(props) {
  return (
    <>
      <Todos todos={props.todos} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      todos: DUMMY_TODOS,
    },
  };
}
