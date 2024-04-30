import s from './refresh-users-button.module.scss';
import { Button } from '@shared/ui';

type Props = {
  onClick: () => void;
};

export const RefreshUsersButton = ({ onClick }: Props) => {
  return (
    <Button
      className={s.button}
      onClick={onClick}>
      Refresh Users
    </Button>
  );
};
