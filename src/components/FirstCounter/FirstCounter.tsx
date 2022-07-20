import { memo } from 'react';

import usePractice from '@/hooks/usePractice';

export const FirstCounter = memo(() => {
  const { data, isLoading, isFetching, refetch } = usePractice();

  const handleClickButton = () => {
    refetch();
    console.log(data);
  };

  return (
    <div>
      FirstCounter
      <button onClick={handleClickButton} type='button'>
        첫번째 버튼
      </button>
    </div>
  );
});
