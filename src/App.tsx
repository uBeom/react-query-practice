import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

import DataList from '@/components/DataList/DataList';
import DataListCopy from '@/components/DataListCopy/DataListCopy';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        initialIsOpen={false}
        panelProps={{
          className: 'dev-tools',
          style: {
            backgroundColor: '#3e87f8',
          },
          onClick() {
            console.log('Click!');
          },
        }}
        position='bottom-right'
      />
      <div>
        <DataList />
        <DataListCopy />
      </div>
    </QueryClientProvider>
  );
};

export default App;
