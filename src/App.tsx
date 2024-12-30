import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ActionZustand, { Children1, Children2, Children3, Children4 } from './pages/ActionZustand.tsx';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <h1>Zustand Test</h1>
      {/*<Suspense fallback={<p>로딩 중</p>}>*/}
      {/*  <FetchQuery />*/}
      {/*</Suspense>*/}
      <ActionZustand />
      <Children1 />
      <Children2 />
      <Children3 />
      <Children4 />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </QueryClientProvider>
  );
}

export default App;
