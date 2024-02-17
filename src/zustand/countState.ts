import { create } from 'zustand';

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// practice no store action
export const useNoActionStore = create<State>(() => ({
  count: 0,
}));
export const incrementStore = () => useNoActionStore.setState((state) => ({ count: state.count + 1 }));
export const decrementStore = () => useNoActionStore.setState((state) => ({ count: state.count - 1 }));
