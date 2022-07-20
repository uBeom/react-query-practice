import { useQuery } from 'react-query';

const fetchPracticeCopy = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const data = res.json();

  return data;
};

const usePracticeCopy = () => {
  return useQuery(['practice'], fetchPracticeCopy, {
    staleTime: 3000,
    cacheTime: 8000,
    enabled: false,
  });
};

export default usePracticeCopy;
