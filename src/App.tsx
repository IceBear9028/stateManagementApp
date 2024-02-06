import './App.css'
import { useCountStore } from './zustand/countState.ts';
import FetchZustand from './pages/fetchZustand.tsx';


function App() {
  const { count, increment, decrement } = useCountStore(state => state);

  return (
    <>
      <h1>Vite + React</h1>
      <h1>Zustand + React Query</h1>
      {/*<div className="card">*/}
      {/*  <p>{count} 결과값</p>*/}
      {/*  <button onClick={increment}>*/}
      {/*    Plus*/}
      {/*  </button>*/}
      {/*  <button onClick={decrement}>*/}
      {/*    Minus*/}
      {/*  </button>*/}
      {/*</div>*/}
      <FetchZustand />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
