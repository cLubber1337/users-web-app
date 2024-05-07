import { UsersPageWrapper } from '@widgets/users-page-wrapper';
import { UsersPageHeader } from '@widgets/users-page-header';
import { UsersList, useUserManagement } from '@widgets/users-list';
import { UsersPageSidebar } from '@widgets/users-page-sidebar';
import { searchOptions, useSearch } from '@features/search';

export const UsersPage = () => {
  const { isPending, data, error, refetch, deleteUser, userStatistics, isRefetching } =
    useUserManagement(2);
  const { debouncedOnChangeValue, searchValue, searchResults } = useSearch(data, searchOptions);

  return (
    <UsersPageWrapper
      header={
        <UsersPageHeader
          refetchUsersList={refetch}
          onSearch={debouncedOnChangeValue}
          searchValue={searchValue}
          isRefetching={isRefetching}
        />
      }
      main={
        <UsersList
          users={searchValue.length > 0 ? searchResults : data}
          deleteUser={deleteUser}
          isLoading={isPending || isRefetching}
          error={error}
        />
      }
      aside={<UsersPageSidebar userStatistics={userStatistics} />}
    />
  );
};
