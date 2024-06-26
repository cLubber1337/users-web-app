import s from './user-card.module.scss';
import { CardDeleteButton } from '@features/card-delete-button';
import { UserCardHeader } from '@entities/user-card/user-card-header';
import { UserCardBody } from '@entities/user-card/user-card-body';
import clsx from 'clsx';
import { memo } from 'react';
import { IUser } from '@entities/user-card/types';
import { formatDate } from '@shared/helpers/format-date';

type Props = {
  user: IUser;
  selectCard: (id: string | null) => void;
  isSelectedCard: boolean;
  deleteUser: (id: string) => void;
};

export const UserCard = memo(({ selectCard, isSelectedCard, deleteUser, user }: Props) => {
  const { login, email, dob, name, phone, location, picture } = user;

  // console.log('UserCard -------> RERENDER');

  const selectCardHandler = () => {
    selectCard(login.uuid);
  };
  const deleteUserHandler = () => {
    deleteUser(login.uuid);
    selectCard(null);
  };
  return (
    <article className={clsx(s.userCard, isSelectedCard && s.userCardSelected)}>
      {isSelectedCard && (
        <CardDeleteButton
          className={s.deleteCardButton}
          onDelete={deleteUserHandler}
        />
      )}
      <header className={s.header}>
        <UserCardHeader
          image={picture.medium}
          firstName={name.first}
          lastName={name.last}
          email={email}
          selectCard={selectCardHandler}
          isSelected={isSelectedCard}
        />
      </header>
      <section className={s.description}>
        <UserCardBody
          phoneNo={phone}
          birthday={formatDate(dob.date)}
          city={location.city}
          state={location.state}
          country={location.country}
        />
      </section>
    </article>
  );
});
