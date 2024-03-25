import TodoItem from "@pages/TodoItem";
import useAxiosInstance from "@hooks/useAxios";
import { useEffect, useState } from "react";
import TodoInput from "@pages/TodoInput";

function TodoList() {
  const axios = useAxiosInstance();
  const [data, setData] = useState();

  const fetchList = async () => {
    const response = await axios.get(`/todolist`);
    setData(response.data);
  };

  //마운트 되면 최초 한번 목록 조회
  useEffect(() => {
    fetchList();
  }, []);

  const itemList = data?.items.map((item) => (
    <TodoItem key={item._id} item={item} />
  ));

  return (
    <>
      <ul className="Todolist scrollBar">{itemList}</ul>
      <TodoInput fetchList={fetchList} />
    </>
  );
}

export default TodoList;
