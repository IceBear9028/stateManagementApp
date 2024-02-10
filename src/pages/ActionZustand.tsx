import { decrementStore, incrementStore, useNoActionStore } from '../zustand/countState.ts';

const ActionZustand = () => {
  const {count} = useNoActionStore();
  return(
    <div>
      {<p>상태 값 : {count}</p>}
      <button onClick={incrementStore}>상태 + 1</button>
      <button onClick={decrementStore}>상태 - 1</button>
    </div>
  )
}

export default ActionZustand;
