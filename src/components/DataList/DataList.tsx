import { useState } from 'react';
import { useQuery } from 'react-query';

interface Practice {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchPracticeData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return data;
};

const DataList = () => {
  const [count, setCount] = useState(0);
  const { data, isLoading, isFetching } = useQuery<Practice>(
    ['practice'],
    fetchPracticeData,
    {
      cacheTime: 5000,
      staleTime: 2000,
    },
  );

  const handleClickButton = () => setCount(prev => prev + 1);

  console.log(data);
  console.log(isLoading, isFetching);

  return (
    <div>
      <div>{count}</div>
      <button type='button' onClick={handleClickButton}>
        카운트
      </button>
    </div>
  );
};

export default DataList;
