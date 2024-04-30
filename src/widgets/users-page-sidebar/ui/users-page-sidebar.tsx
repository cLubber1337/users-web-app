import s from './users-page-sidebar.module.scss';
import { UsersStats, UserStatistics } from '@entities/user-statistics';

type Props = {
  userStatistics: UsersStats;
};

export const UsersPageSidebar = ({ userStatistics }: Props) => {
  // console.log('UsersPageSidebar -------> RENDER');
  return (
    <div className={s.sidebar}>
      <UserStatistics data={userStatistics} />
    </div>
  );
};
