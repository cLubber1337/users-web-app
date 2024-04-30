import s from './card-delete-button.module.scss';
import clsx from 'clsx';
import { Button, DeleteIcon } from '@shared/ui';

type Props = {
  className?: string;
  onDelete: () => void;
};

export const CardDeleteButton = ({ className, onDelete }: Props) => {
  return (
    <Button
      className={clsx(s.button, className)}
      onClick={onDelete}>
      <DeleteIcon className={s.icon} />
    </Button>
  );
};
