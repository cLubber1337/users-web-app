import s from './users-list.module.scss';
import { UserCard } from '@entities/user-card';
import { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';

export const UsersList = () => {
  const [idSelectedCard, setIdSelectedCard] = useState<number | null>(null);
  const usersListRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const selectCard = useCallback((id: number) => {
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
        ref={usersListRef}
        onScroll={handleScroll}>
        {new Array(2).fill(1).map((_, i) => {
          return (
            <UserCard
              id={i}
              key={i}
              selectCard={selectCard}
              isSelectedCard={idSelectedCard === i}
            />
          );
        })}
      </div>
      <div className={clsx(!idSelectedCard && scrollTop !== 100 && s.shadow, s.shadowBottom)}></div>
    </div>
  );
};
