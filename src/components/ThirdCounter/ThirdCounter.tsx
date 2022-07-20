import { useState } from 'react';

import usePractice from '@/hooks/usePractice';

export const ThirdCounter = () => {
  const { data, isLoading, isFetching, refetch } = usePractice();
  const [isShowing, setIsShowing] = useState(false);

  const handleClickButton = () => refetch();
  console.log('thridRender');
  return (
    <div>
      ThirdCounter
      <button onClick={handleClickButton} type='button'>
        세번째 버튼
      </button>
    </div>
  );
};
