import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

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
      <div>App</div>
    </QueryClientProvider>
  );
};

export default App;
