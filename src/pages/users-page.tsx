import { UsersPageWrapper } from '@widgets/users-page-wrapper';
import { UsersPageHeader } from '@widgets/users-page-header';
import { useGetUsersList, UsersList } from '@widgets/users-list';
import { UsersPageSidebar } from '@widgets/users-page-sidebar';

export const UsersPage = () => {
  const { isPending, isError, data, error, refetch } = useGetUsersList(10);

  return (
    <UsersPageWrapper
      header={<UsersPageHeader refetchUsersList={refetch} />}
      main={
        <>
          {isPending ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error.message}</div>
          ) : (
            <UsersList users={data} />
          )}
        </>
      }
      aside={<UsersPageSidebar />}
    />
  );
};
