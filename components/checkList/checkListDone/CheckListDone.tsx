// 완료된 투두 항목 컴포넌트
import { useRouter } from "next/navigation";
import { todoText } from "../checkListTodo/checkListTodo.css";
import { checkBoxDoneImage, checkListDoneContainer } from "./checkListDone.css";

interface DoneItem {
  id: number;
  name: string;
}

interface CheckListDoneProps {
  doneItems: DoneItem[];
}

const CheckListDone = ({ doneItems }: CheckListDoneProps) => {
  const router = useRouter();


  const handleNavigation = (id: number) => {
    router.push(`/detail/${id}`);
  }
  return (
    <>
      {
        doneItems.map((item) => (
          <ul className={checkListDoneContainer} key={item.id}>
            <div className={checkBoxDoneImage}></div>
            <p className={todoText} onClick={() => handleNavigation(item.id)}><del> {item.name}</del> </p>
          </ul>
        ))
      }
    </>

  )
}

export default CheckListDone