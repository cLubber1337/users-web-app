import s from './card-delete-button.module.scss';
import clsx from 'clsx';
import { Button, DeleteIcon } from '@shared/ui';

type Props = {
  className?: string;
};

export const CardDeleteButton = ({ className }: Props) => {
  return (
    <Button className={clsx(s.button, className)}>
      <DeleteIcon className={s.icon} />
    </Button>
  );
};
