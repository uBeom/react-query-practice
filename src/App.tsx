import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

import { FirstCounter } from '@/components/FirstCounter/FirstCounter';
import { SecondCounter } from '@/components/SecondCounter/SecondCounter';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <FirstCounter />
      <SecondCounter />
    </QueryClientProvider>
  );
};

export default App;
