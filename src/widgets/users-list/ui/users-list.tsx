import s from './users-list.module.scss';
import { IUser, UserCard } from '@entities/user-card';
import { useCallback, useState } from 'react';
import clsx from 'clsx';

type Props = {
  users: IUser[];
  deleteUser: (userId: string) => void;
};

export const UsersList = ({ users, deleteUser }: Props) => {
  const [idSelectedCard, setIdSelectedCard] = useState<string | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  console.log('LIST -------> RERENDER');

  const selectCard = useCallback((id: string) => {
    setIdSelectedCard((prev) => (prev === id ? null : id));
  }, []);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
    if (position > 0 && position < 2) {
      setScrollTop(position);
    } else if (position === 0) setScrollTop(0);

    if (position === 100) {
      setScrollTop(position);
    } else if (position < 100 && position > 98) {
      setScrollTop(position);
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={clsx(!idSelectedCard && scrollTop && s.shadow, s.shadowTop)}></div>
      <div
        className={clsx(
          s.usersList,
          idSelectedCard && s.usersListSelected,
          s[`usersList${scrollTop}`]
        )}
        onScroll={handleScroll}>
        {users.map((user) => {
          return (
            <UserCard
              key={user.login.uuid}
              user={user}
              selectCard={selectCard}
              isSelectedCard={idSelectedCard === user.login.uuid}
              deleteUser={deleteUser}
            />
          );
        })}
      </div>
      <div className={clsx(!idSelectedCard && scrollTop !== 100 && s.shadow, s.shadowBottom)}></div>
    </div>
  );
};
