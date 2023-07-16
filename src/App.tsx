import { useMemo, useState } from 'react';

const hardCaculate = (number: number) => {
  console.log('어려운 계산!');
  for (let i = 0; i < 999999999; i++) {} //생각하는 시간
  return number + 10000;
};

const easyCaculate = (number: number) => {
  console.log('짱 쉬운 계산!');
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCaculate(hardNumber);
  const hardSum = useMemo(() => hardCaculate(hardNumber), [hardNumber]);
  const easySum = useMemo(() => easyCaculate(easyNumber), [easyNumber]);

  return (
    <>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={e => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <hr />

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={e => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </>
  );
}

export default App;
