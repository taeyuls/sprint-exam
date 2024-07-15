'use client'
import { addTodoAPI, itemQueryAPI, modifyTodoAPI } from "@/api/todoRequests";
import Done from "@/components/done/Done";
import Search from "@/components/search/Search";
import Todo from "@/components/todo/Todo";
import { useEffect, useRef, useState } from "react";
import { homeContainer, todoList } from "./home.css";
import './page.module.css';



const ITEMS_PER_PAGE = 10; // 한 번에 가져올 아이템 수
interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // 화면 너비 확인용 상태
  const [hasMounted, setHasMounted] = useState(false); // 컴포넌트가 마운트 되었는지 확인하는 상태
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]); // 투두 항목을 저장하는 상태
  const [loading, setLoading] = useState(false); // 데이터 로드 상태
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // 투두 불러오는 함수
  const fetchTodoData = async (page: number) => {
    try {
      setLoading(true);
      const response = await itemQueryAPI(page)
      if (response.status === 200) {
        const newItems = response.data;

        // 중복 데이터 필터링
        const filteredItems: TodoItem[] = newItems.filter((newItem: TodoItem) => !todoItems.some((item: TodoItem) => item.id === newItem.id));

        if (filteredItems.length === 0) {
          setHasMore(false); // 데이터가 없으면 더 이상 요청하지 않음
          return;
        }

        if (filteredItems.length < ITEMS_PER_PAGE) {
          setHasMore(false); // 더 이상 데이터가 없음을 표시
        }

        // 새로운 페이지의 데이터가 중복되지 않도록 조건을 확인
        if (page === 1) {
          setTodoItems(filteredItems); // 페이지가 1인 경우 데이터 덮어쓰기
        } else {
          setTodoItems(prevItems => [...prevItems, ...filteredItems]); // 페이지가 1이 아닌 경우 데이터 추가
        }
      } else {
        console.error('요청 실패');
      }
      // console.log('투두 데이터', response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  // 컴포넌트 마운트 시 투두 데이터를 불러옴
  useEffect(() => {
    if (hasMore) {
      fetchTodoData(page);
    }
  }, [page, hasMore]);


  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    }, {
      threshold: 1.0
    });

    if (loaderRef.current && hasMore) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, hasMore, todoItems]);


  // 투두 추가 함수
  const addTodoItem = async (name: string) => {
    try {
      const response = await addTodoAPI(name)
      if (response.status === 201) {
        const newItem = response.data;
        setTodoItems(prevItems => [newItem, ...prevItems]); // 새 항목을 기존 항목 앞에 추가
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //투두 항목을 완료 상태로 업데이트 하는 함수
  const completedTodoItem = async (itemId: number) => {
    try {
      const updateData = {
        isCompleted: true
      };
      await modifyTodoAPI(itemId, updateData);
      setTodoItems(prevItems => prevItems.map(item => item.id === itemId ? { ...item, isCompleted: true } : item));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // 완료된 항목과 완료되지 않은 항목을 필터링
  const completedItems = todoItems.filter(item => item.isCompleted);
  const incompleteItems = todoItems.filter(item => !item.isCompleted);

  // 윈도우 너비 확인용
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 마운트 시 초기화

    setHasMounted(true); // 컴포넌트가 마운트되었음을 표시

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!hasMounted) {
    return null; // 클라이언트가 마운트되기 전에는 아무것도 렌더링하지 않음
  }

  return (
    <div className={homeContainer}>
      <Search addTodoItem={addTodoItem} /> {/* 투두 항목 추가 컴포넌트 */}
      <div className={todoList}>
        <Todo todoItems={incompleteItems} completedTodoItem={completedTodoItem} /> {/* 완료 되지 않은 투두 항목 컴포넌트 */}
        <Done doneItems={completedItems} /> {/* 완료된 투두  컴포넌트 */}
      </div>
      {loading && <p>Loading...</p>} {/* 로딩 중일 때 표시 */}
      <div ref={loaderRef} />

    </div>
  );
}
