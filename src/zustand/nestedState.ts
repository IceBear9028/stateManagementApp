import { create } from 'zustand';

interface State {
  count: number;
  text: string;
  subText: {
    count: number;
    text: string;
    array: string[];
    object: any;
  };
}

interface Store {
  state: State;
  increment: () => void;
  decrement: () => void;
  incrementSub: () => void;
  decrementSub: () => void;
}

export const useNestedCountStore = create<Store>((set) => ({
  state: {
    count: 0,
    text: '비교값',
    subText: {
      count: 0,
      text: 'nested 비교값',
      array: ['array 테스트'],
      object: { text: '테스트' },
    },
  },
  increment: () => set((prev) => ({ ...prev, state: { ...prev.state, count: (prev.state.count += 1) } })),
  decrement: () => set((prev) => ({ ...prev, state: { ...prev.state, count: (prev.state.count -= 1) } })),
  incrementSub: () =>
    set((prev) => ({ ...prev, state: { ...prev.state, subText: { ...prev.state.subText, count: (prev.state.subText.count += 1) } } })),
  decrementSub: () =>
    set((prev) => ({ ...prev, state: { ...prev.state, subText: { ...prev.state.subText, count: (prev.state.subText.count -= 1) } } })),
}));
