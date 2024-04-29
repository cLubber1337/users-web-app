import { ComponentPropsWithoutRef, ReactNode } from 'react';
import s from './button.module.scss';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'clear';
  className?: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button
      className={clsx(s.button, variant, className)}
      {...props}>
      {children}
    </button>
  );
};
