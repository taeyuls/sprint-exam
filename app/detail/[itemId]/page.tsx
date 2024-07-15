'use client'
import { modifyTodoAPI, todoDeleteAPI, todoDetailAPI } from "@/api/todoRequests"
import CheckListDetail from "@/components/checkListDetail/CheckListDetail"
import ImageRegistration from "@/components/imageRegistration/ImageRegistration"
import MemoRegistration from "@/components/memoRegistration/MemoRegistration"
import xIcon from "@/public/icons/X.svg"
import checkIcon from '@/public/icons/check.svg'
import useTodoDetailStore from "@/store/useTodoDetail"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { deleteBtn, detailBtnWrap, detailContainer, detailListContainer, imageMemoContainer, modifyBtn, modifyBtnSuccess } from "../detail.css"


//todoDetails 타입 정의
interface TodoDetails {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

const Detail = (props: { params: { itemId: number } }) => {
  const itemId = props.params.itemId
  const [todoDetails, setTodoDetails] = useState<TodoDetails>({ name: '', memo: '', imageUrl: '', isCompleted: false });
  const [isModified, setIsModified] = useState(false);
  const { setName, setMemo, setIsCompleted } = useTodoDetailStore();

  const router = useRouter();

  // 페이지 이동
  const handleNavigation = () => {
    router.push(`/`);
  }

  // 투두 상세 불러오는 함수
  const fetchData = async () => {
    try {
      const response = await todoDetailAPI(itemId);
      // console.log('상세 데이터:', response.data);
      setTodoDetails(response.data)
      setName(response.data.name);
      setMemo(response.data.memo);
      setIsCompleted(response.data.isCompleted);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // 투두상세 수정 함수
  const modifyTodoItem = async () => {
    try {
      const updateData = {
        name: todoDetails.name !== null ? todoDetails.name : '',
        memo: todoDetails.memo !== null ? todoDetails.memo : '',
        imageUrl: todoDetails.imageUrl !== null ? todoDetails.imageUrl : '',
        isCompleted: todoDetails.isCompleted
      };
      await modifyTodoAPI(itemId, updateData);
      setIsModified(true);
      handleNavigation()
      // console.log('수정된 데이터:', updateData);
      alert('수정 완료')
      // fetchData(); // 완료 후 데이터를 다시 가져옴
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //투두 삭제 함수
  const deleteTodo = async () => {
    try {
      await todoDeleteAPI(itemId)
      handleNavigation()
      // fetchData(); // 완료 후 데이터를 다시 가져옴
      // console.log('삭제 성공')
      alert('삭제되었습니다🍀')
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleImageUploadSuccess = (url: string) => {
    setTodoDetails({ ...todoDetails, imageUrl: url });
  }

  // 컴포넌트 마운트 시 투두 상세 데이터 불러오기
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={detailContainer}>
      <div className={detailListContainer}>
        <CheckListDetail todoDetails={todoDetails} setTodoDetails={setTodoDetails} />
        <div className={imageMemoContainer}>
          <ImageRegistration imageUrl={todoDetails.imageUrl} onUploadSuccess={handleImageUploadSuccess} />
          <MemoRegistration memo={todoDetails.memo} setMemo={(newMemo: string) => setTodoDetails({ ...todoDetails, memo: newMemo })} />
        </div>
        <div className={detailBtnWrap}>
          <button className={isModified ? modifyBtnSuccess : modifyBtn} onClick={modifyTodoItem}>
            <Image src={checkIcon} alt="체크아이콘" />
            수정완료
          </button>
          <button className={deleteBtn} onClick={deleteTodo}>
            <Image src={xIcon} alt="엑스아이콘" />
            삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail