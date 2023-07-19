import { type FC, useState, useEffect } from 'react';

const App: FC = () => {
  const [teamA, setTeamA] = useState(10);
  const [teamB, setTeamB] = useState(10);

  useEffect(() => {
    if (teamA !== teamB) alert('줄다리기 종료');
  }, [teamA, teamB]);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const decrease = async () => {
    await delay(1500);
    setTeamA(a => a - 1);
    setTeamB(b => b - 1);
  };

  return (
    <>
      <h1>줄다리기는 균형이 중요해!</h1>
      <strong>A: {teamA}</strong>
      <strong>B: {teamB}</strong>
      <button onClick={() => void decrease()}>한명 줄이기</button>
    </>
  );
};

export default App;
