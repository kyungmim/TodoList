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

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`/todolist/${_id}`);
      fetchList();
      alert("할일 삭제에 성공하였습니다.");
    } catch (err) {
      alert("할일 삭제 실패하였습니다.");
    }
  };

  //마운트 되면 최초 한번 목록 조회
  useEffect(() => {
    fetchList();
  }, []);

  const itemList = data?.items.map((item) => (
    <TodoItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  return (
    <>
      <ul className="Todolist scrollBar">{itemList}</ul>
      <TodoInput fetchList={fetchList} />
    </>
  );
}

export default TodoList;
