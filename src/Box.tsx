import { FC, memo } from 'react';

type Props = {
  someFunction: () => void;
};
const Box: FC<Props> = ({ someFunction }) => {
  return <div onClick={someFunction}>box</div>;
};

// export default Box;

export const MemoizedBox = memo(Box);
