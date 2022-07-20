import { useState } from 'react';

import { ThirdCounter } from '../ThirdCounter/ThirdCounter';

import usePracticeCopy from '@/hooks/usePractice';

export const SecondCounter = () => {
  const { data, isLoading, isFetching, refetch } = usePracticeCopy();
  const [isShowing, setIsShowing] = useState(true);
  const handleClickButton = () => {
    console.log(isLoading, isFetching);
  };
  console.log('render');
  const handleClickThirdCounterFlagButton = () => setIsShowing(!isShowing);

  return (
    <div>
      SecondCounter
      <button onClick={handleClickButton} type='button'>
        두번째 버튼
      </button>
      <button onClick={handleClickThirdCounterFlagButton} type='button'>
        세번째 플래그 버튼
      </button>
      {isShowing && <ThirdCounter />}
    </div>
  );
};
