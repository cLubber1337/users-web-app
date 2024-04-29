import s from './users-list.module.scss';
import { UserCard } from '@entities/user-card';

export const UsersList = () => {
  return (
    <div className={s.usersList}>
      {new Array(2).fill(1).map((_, i) => {
        return <UserCard key={i} />;
      })}
    </div>
  );
};
