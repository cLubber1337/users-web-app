import { UsersPageWrapper } from '@widgets/users-page-wrapper';
import { UsersPageHeader } from '@widgets/users-page-header';
import { UsersList } from '@widgets/users-list';
import { UsersPageSidebar } from '@widgets/users-page-sidebar';

export const UsersPage = () => {
  return (
    <UsersPageWrapper
      header={<UsersPageHeader />}
      main={<UsersList />}
      aside={<UsersPageSidebar />}
    />
  );
};
