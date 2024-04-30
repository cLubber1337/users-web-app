import s from './users-page-header.module.scss';
import { TextField } from '@shared/ui';
import { RefreshUsersButton } from '@features/refresh-users-button';

export const UsersPageHeader = () => {
  return (
    <div className={s.header}>
      <TextField placeholder={'search'} />
      <RefreshUsersButton />
    </div>
  );
};
