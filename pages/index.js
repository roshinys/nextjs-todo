import Header from "@/components/Layout/Header";
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
    id: 1,
    task: "Study",
  },
  {
    id: 1,
    task: "Drink",
  },
];

export default function Home(props) {
  return (
    <>
      <Header />
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
