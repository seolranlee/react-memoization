import { useEffect, useMemo, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 원시 type일 때는 문제 없음
  // const location = isKorea ? '한국' : '외국';

  // 객체 type일 경우
  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출');
    // 오래걸리는 작업..
  }, [location]);

  return (
    <>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(+e.target.value)}
      />
      <hr />
      <h2>어느 나라에서 왔어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </>
  );
}

export default App;
