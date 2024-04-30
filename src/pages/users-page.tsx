import { UsersPageWrapper } from '@widgets/users-page-wrapper';
import { UsersPageHeader } from '@widgets/users-page-header';
import { UsersList, useUserManagement } from '@widgets/users-list';
import { UsersPageSidebar } from '@widgets/users-page-sidebar';
import { useSearch } from '@features/search';

const searchOptions = {
  keys: [
    'name.first',
    'name.last',
    'email',
    'phone',
    'location.city',
    'location.state',
    'location.country',
    'dob.date'
  ],
  threshold: 0.2
};

export const UsersPage = () => {
  const { isPending, data, error, refetch, deleteUser, userStatistics } = useUserManagement(10);
  const { debouncedOnChangeValue, searchValue, searchResults } = useSearch(data, searchOptions);

  return (
    <UsersPageWrapper
      header={
        <UsersPageHeader
          refetchUsersList={refetch}
          onSearch={debouncedOnChangeValue}
          searchValue={searchValue}
        />
      }
      main={
        <>
          {isPending ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error.message}</div>
          ) : (
            <UsersList
              users={searchValue.length > 0 ? searchResults : data}
              deleteUser={deleteUser}
            />
          )}
        </>
      }
      aside={<UsersPageSidebar userStatistics={userStatistics} />}
    />
  );
};
