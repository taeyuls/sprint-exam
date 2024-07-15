// 메모 입력 컴포넌트
import '@/app/page.module.css';
import { memoContainer, memoText, textArea } from "./memoRegistration.css";

interface MemoRegistrationProps {
  memo: string;
  setMemo: (memo: string) => void;
}

const MemoRegistration = ({ memo, setMemo }: MemoRegistrationProps) => {
  return (
    <div className={memoContainer}>
      <div className={memoText}>
        <p>Memo</p>
      </div>
      <textarea className={textArea} value={memo || ""} onChange={(e) => setMemo(e.target.value)} />
    </div>
  )
}

export default MemoRegistration