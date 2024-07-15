"use client";
import { addTodoAPI, itemQueryAPI, modifyTodoAPI } from "@/api/todoRequests";
import Done from "@/components/done/Done";
import Search from "@/components/search/Search";
import Todo from "@/components/todo/Todo";
import { useEffect, useRef, useState } from "react";
import { homeContainer, todoList } from "./home.css";
import "./page.module.css";

const ITEMS_PER_PAGE = 10;

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchTodoData = async (page: number) => {
    try {
      setLoading(true);
      const response = await itemQueryAPI(page);
      if (response.status === 200) {
        const newItems = response.data;

        const filteredItems: TodoItem[] = newItems.filter(
          (newItem: TodoItem) =>
            !todoItems.some((item: TodoItem) => item.id === newItem.id)
        );

        if (filteredItems.length === 0) {
          setHasMore(false);
          return;
        }

        if (filteredItems.length < ITEMS_PER_PAGE) {
          setHasMore(false);
        }

        if (page === 1) {
          setTodoItems(filteredItems);
        } else {
          setTodoItems((prevItems) => [...prevItems, ...filteredItems]);
        }
      } else {
        console.error("요청 실패");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      fetchTodoData(page);
    }
  }, [page, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (loaderRef.current && hasMore) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, hasMore, todoItems]);

  const addTodoItem = async (name: string) => {
    try {
      const response = await addTodoAPI(name);
      if (response.status === 201) {
        const newItem = response.data;
        setTodoItems((prevItems) => [newItem, ...prevItems]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const completedTodoItem = async (itemId: number) => {
    try {
      const updateData = {
        isCompleted: true,
      };
      await modifyTodoAPI(itemId, updateData);
      setTodoItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, isCompleted: true } : item
        )
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const completedItems = todoItems.filter((item) => item.isCompleted);
  const incompleteItems = todoItems.filter((item) => !item.isCompleted);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    setHasMounted(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={homeContainer}>
      <Search addTodoItem={addTodoItem} />
      <div className={todoList}>
        <Todo
          todoItems={incompleteItems}
          completedTodoItem={completedTodoItem}
        />
        <Done doneItems={completedItems} />
      </div>
      {loading && <p>Loading...</p>}
      <div ref={loaderRef} />
    </div>
  );
}
