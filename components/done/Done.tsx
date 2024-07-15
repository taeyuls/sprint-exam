// 할 일 목록 페이지 - 완료된 투두 데이터가 없을 경우 컴포넌트
import done from '@/public/images/done.svg'
import Image from "next/image"
import CheckListDone from '../checkList/checkListDone/CheckListDone'
import { doneContainer, doneIcon, doneImageContainer, doneTextContainer, emptyDone } from './done.css'

interface DoneProps {
  doneItems: Array<{ id: number, name: string }>
}
const Done = ({ doneItems }: DoneProps) => {
  const hasIncompleteItems = doneItems.length > 0; // 완료된 항목이 있는지 확인하는 변수

  return (
    <div className={doneContainer}>
      <div className={doneIcon}>
        <Image src={done} alt='done' />
      </div>
      {hasIncompleteItems ? (
        <CheckListDone doneItems={doneItems} /> // 완료된 항목이 있을 경우 완료된 항목 리스트를 보여줌
      ) : (
        //완료된 항목이 없을 경우 보여주는 빈 이미지 
        <div className={doneImageContainer}>
          <div className={emptyDone} />
          <div className={doneTextContainer}>
            <span>아직 다 한 일이 없어요.</span>
            <span>해야 할 일을 체크해보세요!</span>
          </div>
        </div>

      )}
    </div>
  )
}

export default Done