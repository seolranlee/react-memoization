import { memo } from 'react';

type Props = {
  title: string;
  releaseDate: string;
};
export function Movie({ title, releaseDate }: Props) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

export const MemoizedMovie = memo(Movie);
