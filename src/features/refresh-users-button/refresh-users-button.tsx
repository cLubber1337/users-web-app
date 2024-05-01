import { Button } from '@shared/ui';
import s from './refresh-users-button.module.scss';

type Props = {
  onClick: () => void;
  isRefetching?: boolean;
};

export const RefreshUsersButton = ({ onClick, isRefetching }: Props) => {
  return (
    <Button
      className={s.button}
      onClick={onClick}
      disabled={isRefetching}>
      Refresh Users
    </Button>
  );
};
