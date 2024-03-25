import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

function Main() {
  return (
    <>
      <main className="main">
        <TodoList />
        <TodoInput />
      </main>
    </>
  );
}
export default Main;
