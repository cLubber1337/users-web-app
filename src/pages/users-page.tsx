import { UsersPageWrapper } from '@widgets/users-page-wrapper';
import { UsersPageHeader } from '@widgets/users-page-header';
import { useUserManagement, UsersList } from '@widgets/users-list';
import { UsersPageSidebar } from '@widgets/users-page-sidebar';

export const UsersPage = () => {
  const { isPending, data, error, refetch, deleteUser } = useUserManagement(10);

  return (
    <UsersPageWrapper
      header={<UsersPageHeader refetchUsersList={refetch} />}
      main={
        <>
          {isPending ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error.message}</div>
          ) : (
            <UsersList
              users={data}
              deleteUser={deleteUser}
            />
          )}
        </>
      }
      aside={<UsersPageSidebar />}
    />
  );
};
