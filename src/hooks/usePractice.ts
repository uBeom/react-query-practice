import { useQuery } from 'react-query';

const fetchPractice = async () => {
  const res = await fetch(
    'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?ServiceKey=p%2Bzl1YII9CyAVA%2FMau%2BJp%2F2i75DR9o%2B3aLDrfzsUF%2B7Xq6NtJW0HtSVtK4eG%2Fpu6IBRQFKPyv9UNXmnzox9VeA%3D%3D',
  );
  const data = res.json();

  return data;
};

const usePractice = () => {
  return useQuery(['practice'], fetchPractice, {
    staleTime: 3000,
    cacheTime: 8000,
    enabled: false,
  });
};

export default usePractice;
