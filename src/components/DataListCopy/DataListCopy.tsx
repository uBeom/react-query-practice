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

const DataListCopy = () => {
  const [count, setCount] = useState(0);
  const { data } = useQuery<Practice>(['practice', URL], fetchPracticeData, {
    cacheTime: 5000,
    staleTime: 2000,
  });

  const handleClickButton = () => setCount(prev => prev + 1);

  console.log(data);

  return (
    <div>
      <div>{count}</div>
      <button type='button' onClick={handleClickButton}>
        카운트
      </button>
    </div>
  );
};

export default DataListCopy;
