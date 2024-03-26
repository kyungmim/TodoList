import useAxiosInstance from "@hooks/useAxios";
import { useEffect, useState } from "react";

function Header() {
  const axios = useAxiosInstance();
  const [list, setList] = useState();

  const fetchList = async () => {
    const response = await axios.get(`/todolist`);
    setList(response.data.items.length);
    fetchList();
  };
  //내일 질문하기ㅣㅣ

  useEffect(() => {
    fetchList();
  }, []);

  // 현재 날짜를 가져옵니다.
  const today = new Date();

  // 현지 시각 기반의 값을 반환하는 메서드
  // date.getFullYear(); // 2024
  // *getMonth +1 해야 현재 월 표시*
  // date.getMonth(); // 2
  // date.getDate(); // 9
  // date.getDay(); // 3 (수요일)
  // date.getHours(); // 0
  // date.getMinutes(); // 0
  // date.getSeconds(); // 0
  // date.getMilliseconds(); // 0
  const formattedDate = `
  ${today.getFullYear()}년 
  ${today.getMonth() + 1}월 
  ${today.getDate()}일`;

  // const getweek = (() => {
  //   const todayWeek = [
  //     "일요일",
  //     "월요일",
  //     "화요일",
  //     "수요일",
  //     "목요일",
  //     "금요일",
  //     "토요일",
  //   ];
  //   const res = todayWeek.filter((_, i) => i === week);
  //   return res;
  // })();

  const getweek = (() => {
    const week = today.getDay();
    switch (week) {
      case 0:
        return "일요일";
      case 1:
        return "월요일";
      case 2:
        return "화요일";
      case 3:
        return "수요일";
      case 4:
        return "목요일";
      case 5:
        return "금요일";
      case 6:
        return "토요일";
    }
  })();

  return (
    <>
      <header className="header">
        <h1 className="date">{formattedDate}</h1>
        <p className="week">{getweek}</p>
        <p className="lastwork">할 일 {list}개 남음</p>
      </header>
    </>
  );
}
export default Header;
