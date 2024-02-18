import { useCountStore } from '../zustand/countState.ts';

const ActionZustand = () => {
  const { count, increment, decrement } = useCountStore();
  return (
    <div>
      {<p>상태 값 : {count}</p>}
      <button onClick={increment}>상태 + 1</button>
      <button onClick={decrement}>상태 - 1</button>
      <Children1 />
      <Children2 />
    </div>
  );
};

const Children1 = () => {
  console.log('Children1 랜더링 발생');
  return (
    <div>
      <h2>자식 컴포넌트2</h2>
    </div>
  );
};

const Children2 = () => {
  console.log('Children2 랜더링 발생');
  return (
    <div>
      <h2>자식 컴포넌트2</h2>
    </div>
  );
};

export default ActionZustand;
