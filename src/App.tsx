import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import FetchZustand from './pages/fetchZustand.tsx';
import FetchQuery from './pages/FetchQuery.tsx';
import ActionZustand from './pages/ActionZustand.tsx';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <h1>Vite + React</h1>
      <h1>Zustand + React Query</h1>
      <FetchQuery />
      <ActionZustand />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </QueryClientProvider>
  );
}

export default App;
