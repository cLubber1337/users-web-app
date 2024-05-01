import s from './avatar.module.scss';
import type { MouseEvent } from 'react';
import { getAvatarFallback } from '../../helpers/getAvatarFallback';
import clsx from 'clsx';

type Props = {
  src?: string;
  size?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  fallback?: string;
  className?: string;
};

export const Avatar = ({ src, size = 56, onClick, fallback, className }: Props) => {
  return (
    <div
      className={clsx(s.avatar, className)}
      onClick={onClick}
      style={{ width: size, height: size }}>
      {src && (
        <img
          src={src}
          alt={''}
          loading={'lazy'}
        />
      )}

      {!src && fallback && (
        <span style={{ fontSize: size / 2.5 }}>{getAvatarFallback(fallback)}</span>
      )}
    </div>
  );
};
