import { create } from 'zustand';

interface TodoDetailState {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
  setName: (name: string) => void;
  setMemo: (memo: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setIsCompleted: (isCompleted: boolean) => void;
}



const useTodoDetailStore = create<TodoDetailState>((set) => ({
  name: '',
  memo: '',
  imageUrl: '',
  isCompleted: false,

  setName: (name) => set(() => ({ name })),
  setMemo: (memo) => set(() => ({ memo })),
  setImageUrl: (imageUrl) => set(() => ({ imageUrl })),
  setIsCompleted: (isCompleted) => set(() => ({ isCompleted }))
}));

export default useTodoDetailStore;
