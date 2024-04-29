import s from './text-field.module.scss';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = {
  className?: string;
} & ComponentPropsWithoutRef<'input'>;

export const TextField = ({ className, ...rest }: Props) => {
  return (
    <input
      className={clsx(s.input, className)}
      {...rest}
    />
  );
};
