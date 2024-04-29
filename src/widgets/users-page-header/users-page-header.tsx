import s from './users-page-header.module.scss';
import { TextField } from '@shared/ui';

export const UsersPageHeader = () => {
  return (
    <div className={s.header}>
      <TextField placeholder={'search'} />
    </div>
  );
};
