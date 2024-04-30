import s from './users-page-header.module.scss';
import { TextField } from '@shared/ui';
import { RefreshUsersButton } from '@features/refresh-users-button';

type Props = {
  refetchUsersList: () => void;
};

export const UsersPageHeader = ({ refetchUsersList }: Props) => {
  return (
    <div className={s.header}>
      <TextField placeholder={'search'} />
      <RefreshUsersButton onClick={refetchUsersList} />
    </div>
  );
};
