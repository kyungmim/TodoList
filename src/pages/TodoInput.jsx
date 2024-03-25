import useAxiosInstance from "@hooks/useAxios";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

TodoInput.propTypes = {
  fetchList: PropTypes.func,
};

function TodoInput({ fetchList }) {
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (fomData) => {
    try {
      await axios.post("/todolist", fomData);
      alert("할일 추가 성공");
      fetchList();
      reset();
    } catch (err) {
      console.log(err);
      alert("할일 추가에 실패");
    }
  };

  return (
    <>
      <form className="todoInput" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          placeholder="목표를 적어주세요!"
          {...register("title")}
        />
        <label htmlFor="content">내용</label>
        <textarea
          type="text"
          id="content"
          placeholder="내용을 적어주세요!"
          {...register("content")}
        />
        <button className="plusButton" type="submit">
          +
        </button>
      </form>
    </>
  );
}

export default TodoInput;
