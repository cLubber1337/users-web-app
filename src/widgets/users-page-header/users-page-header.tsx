import s from './users-page-header.module.scss';
import { RefreshUsersButton } from '@features/refresh-users-button';
import { Search } from '@features/search';
import { ChangeEvent } from 'react';

type Props = {
  refetchUsersList: () => void;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  isRefetching?: boolean;
};

export const UsersPageHeader = ({
  refetchUsersList,
  onSearch,
  searchValue,
  isRefetching
}: Props) => {
  return (
    <div className={s.header}>
      <Search
        onSearch={onSearch}
        value={searchValue}
      />
      <RefreshUsersButton
        onClick={refetchUsersList}
        isRefetching={isRefetching}
      />
    </div>
  );
};
