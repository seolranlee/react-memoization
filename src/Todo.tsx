/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, type FC, useEffect, useCallback } from 'react';

type Props = { id: number };

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo: FC<Props> = ({ id }) => {
  // const [data, setData] = useState<Todo | null>(null);
  const [obj, setObj] = useState({});

  // const fetchData = useCallback(
  //   () =>
  //     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //       .then(response => response.json())
  //       .then(data => data as Todo),
  //   [id],
  // );

  const promise1 = () => {
    return Promise.resolve({
      id,
    });
  };

  useEffect(() => {
    console.log(obj);
    promise1().then(value => {
      setObj(value);
    });
  }, [promise1]);

  // useEffect(() => {
  //   fetchData().then(data => {
  //     setData(data);
  //   });
  // }, [fetchData]);

  return <>{JSON.stringify(obj)}</>;
};

export default Todo;
