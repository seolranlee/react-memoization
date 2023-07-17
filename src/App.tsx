import { useCallback, useState } from 'react';
import { MemoizedBox } from './Box';
// import Box from './Box';

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    return console.log(`someFunc: number: ${number}`);
  }, [number]);

  // const someFunction = () => {
  //   return console.log(`someFunc: number: ${number}`);
  // };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(+e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'true' : 'false'}
      </button>
      <MemoizedBox someFunction={someFunction} />
    </>
  );
}

export default App;
