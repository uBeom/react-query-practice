import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

import DataList from '@/components/DataList/DataList';
import DataListCopy from '@/components/DataListCopy/DataListCopy';

const queryClient = new QueryClient();

const App = () => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('10초 지남');
      setFlag(true);
    }, 10000);
  }, []);

  if (flag) {
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
        <div>10초 지남.</div>
      </QueryClientProvider>
    );
  }

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
