import { useCallback, useEffect, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    return console.log(`someFunc: number: ${number}`);
  }, [number]);

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.');
  }, [someFunction]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(+e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call somefunc</button>
    </>
  );
}

export default App;
