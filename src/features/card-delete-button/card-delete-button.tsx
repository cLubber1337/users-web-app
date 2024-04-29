import { Button } from '@/shared/ui/button/button';
import { DeleteIcon } from '@shared/ui/icons/delete-icon';
import s from './card-delete-button.module.scss';
import clsx from 'clsx';

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
