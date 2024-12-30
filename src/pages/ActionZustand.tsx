import { useNestedCountStore } from '../zustand/nestedState.ts';

const ActionZustand = () => {
  const { increment, decrement } = useNestedCountStore((store) => ({
    increment: store.incrementSub,
    decrement: store.incrementSub,
  }));
  return (
    <div>
      <button onClick={increment}>상태 + 1</button>
      <button onClick={decrement}>상태 - 1</button>
    </div>
  );
};

export const Children1 = () => {
  const count = useNestedCountStore((store) => store.state.subText.count);
  console.log('Children1 랜더링 발생');
  return (
    <div>
      {<p>상태 값 : {count}</p>}
      <h2>자식 컴포넌트1</h2>
    </div>
  );
};

export const Children2 = () => {
  const text = useNestedCountStore((store) => store.state.text);
  console.log('Children2 랜더링 발생');
  return (
    <div>
      {<p>상태 값 : {text}</p>}
      <h2>자식 컴포넌트2</h2>
    </div>
  );
};

export const Children3 = () => {
  const text = useNestedCountStore((store) => store.state.subText.text);
  console.log('Children3 랜더링 발생');
  return (
    <div>
      {<p>상태 값 : {text}</p>}
      <h2>자식 컴포넌트2</h2>
    </div>
  );
};

export const Children4 = () => {
  const text = useNestedCountStore((store) => store.state.subText.array);
  console.log('Children4 랜더링 발생');
  return (
    <div>
      {<p>상태 값 : {text[0]}</p>}
      <h2>자식 컴포넌트4</h2>
    </div>
  );
};

export default ActionZustand;
