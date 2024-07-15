// 투두 상세페이지 제목 컴포넌트

import checkBoxDone from '@/public/icons/checkbox_done.svg';
import checkBox from '@/public/icons/checkbox_none.svg';
import Image from "next/image";
import { useEffect, useState } from "react";
import { checkIcon, checkListName, checkListNameContainer, checkListNameContainerCompleted } from "./checkListDetail.css";

interface TodoDetails {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

interface CheckListDetailProps {
  todoDetails: TodoDetails;
  setTodoDetails: React.Dispatch<React.SetStateAction<TodoDetails>>;
}

const CheckListDetail = ({ todoDetails, setTodoDetails }: CheckListDetailProps) => {
  const [isEditing, setIsEditing] = useState(false); // 제목 수정 상태를 관리하는 상태
  const [inputValue, setInputValue] = useState(todoDetails.name); // 입력된 제목 값을 관리하는 상태

  // 투두 항목의 제목이 바뀔때 마다 inputValue를 업데이트
  useEffect(() => {
    setInputValue(todoDetails.name);
  }, [todoDetails.name]);

  // 입력 값이 변경될때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //입력 창에서 포커스를 잃을 때 호출 되는 함수
  const handleBlur = () => {
    if (inputValue.trim()) {
      setTodoDetails((prevDetails) => ({
        ...prevDetails,
        name: inputValue // 입력된 값이 빈 문자열이 아닐 경우 투두 항목의 이름을 업데이트한다
      }));
    } else {
      setInputValue(todoDetails.name); // 빈문자열일 경우 원래 이름으로 
    }
    setIsEditing(false); // 제목 수정 상태 종료
  };


  return (
    <div className={`${checkListNameContainer} ${todoDetails.isCompleted ? checkListNameContainerCompleted : checkListNameContainer}`}>
      {todoDetails.isCompleted ? (
        <Image src={checkBoxDone} alt="체크박스" className={checkIcon} />
      ) : (
        <Image src={checkBox} alt="체크박스" className={checkIcon} />
      )}
      {/* <div className={checkBoxTodoImage}></div> */}
      {isEditing ? (
        <input
          className={checkListName}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditing(true)}><u>{todoDetails.name}</u></p>
      )}
    </div>
  );
};

export default CheckListDetail;
