function TodoInput() {
  return (
    <>
      <form className="todoInput">
        <input type="text" id="title" placeholder="목표를 적어주세요!" />
        <button className="plusButton" type="submit">
          +
        </button>
      </form>
    </>
  );
}

export default TodoInput;
