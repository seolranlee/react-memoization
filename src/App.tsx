import { type FC, useCallback, useState } from 'react';
import Todo from './Todo';

const App: FC = () => {
  const [id, setId] = useState(1);

  return (
    <>
      <input type="number" value={id} onChange={e => setId(+e.target.value)} />
      <Todo id={id} />
    </>
  );
};

export default App;
