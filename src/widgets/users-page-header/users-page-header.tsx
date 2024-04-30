import s from './users-page-header.module.scss';
import { RefreshUsersButton } from '@features/refresh-users-button';
import { Search } from '@features/search';
import { ChangeEvent } from 'react';

type Props = {
  refetchUsersList: () => void;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
};

export const UsersPageHeader = ({ refetchUsersList, onSearch, searchValue }: Props) => {
  return (
    <div className={s.header}>
      <Search
        onSearch={onSearch}
        value={searchValue}
      />
      <RefreshUsersButton onClick={refetchUsersList} />
    </div>
  );
};
