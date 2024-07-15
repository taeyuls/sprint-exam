'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { gnb, headerContainer, logo } from './gnb.css';

const Gnb = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // 화면 크기 상태를 저장하는 변수
  const [hasMounted, setHasMounted] = useState(false); // 컴포넌트가 마운트되었는지 여부를 저장하는 변수

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500); // 화면 크기가 500px 이하인지 확인
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 컴포넌트가 마운트될 때 초기화

    setHasMounted(true); // 컴포넌트가 마운트되었음을 표시

    return () => {
      window.removeEventListener('resize', handleResize);  // 컴포넌트가 언마운트될 때 리사이즈 이벤트 리스너 제거
    };
  }, []);

  if (!hasMounted) {
    return null; // 클라이언트가 마운트되기 전에는 아무것도 렌더링하지 않음
  }

  return (
    <div className={headerContainer}>
      <div className={gnb}>
        <Link href='/'>
          <div className={logo} />
        </Link>
      </div>
    </div>
  );
};

export default Gnb;
