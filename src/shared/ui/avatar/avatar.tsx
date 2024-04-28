import s from './avatar.module.scss';
import type { MouseEvent } from 'react';
import { getAvatarFallback } from '../../helpers/getAvatarFallback';

type Props = {
  src?: string;
  size?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  fallback?: string;
};

export const Avatar = ({ src, size = 56, onClick, fallback }: Props) => {
  return (
    <div
      className={s.avatar}
      onClick={onClick}
      style={{ width: size, height: size }}>
      {src && (
        <img
          src={src}
          alt={''}
        />
      )}

      {!src && fallback && (
        <span style={{ fontSize: size / 2.5 }}>{getAvatarFallback(fallback)}</span>
      )}
    </div>
  );
};
