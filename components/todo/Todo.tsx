// 할 일 목록 페이지 - 투두 데이터가 없을 경우 컴포넌트
import todo from "@/public/images/todo.svg";
import Image from "next/image";
import CheckListTodo from "../checkList/checkListTodo/CheckListTodo";
import { emptyTodo, todoContainer, todoIcon, todoImageContainer, todoTextContainer } from './todo.css';


interface TodoProps {
  todoItems: Array<{ id: number, name: string }>; // 투두 항목 배열
  completedTodoItem: (itemId: number) => void; // 투두 항목 완료 처리 함수
}

const Todo = ({ todoItems, completedTodoItem }: TodoProps) => {
  const hasIncompleteItems = todoItems.length > 0;// 완료되지 않은 항목이 있는지 확인하는 변수
  return (
    <div className={todoContainer}>
      <div className={todoIcon}>
        <Image src={todo} alt='todo' />
      </div>
      {hasIncompleteItems ? (
        <CheckListTodo todoItems={todoItems} completedTodoItem={completedTodoItem} />// 완료되지 않은 항목이 있을 경우 투두 리스트를 보여줌
      ) : (
        //완료되지 않은 항목이 없을 경우 보여주는 빈 이미지 
        <div className={todoImageContainer}>
          <div className={emptyTodo} />
          <div className={todoTextContainer}>
            <span>할 일이 없어요.</span>
            <span>TODO를 새롭게 추가해주세요!</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo