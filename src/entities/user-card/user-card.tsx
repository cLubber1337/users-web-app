import s from './user-card.module.scss';
import { CardDeleteButton } from '@features/card-delete-button';
import { UserCardHeader } from '@entities/user-card/user-card-header';
import { UserCardDescription } from '@entities/user-card/user-card-description';
import clsx from 'clsx';
import { memo } from 'react';

type Props = {
  selectCard: (id: number) => void;
  id: number;
  isSelectedCard: boolean;
};

export const UserCard = memo(({ selectCard, id, isSelectedCard }: Props) => {
  console.log('render---> user-card');

  const selectCardHandler = () => {
    selectCard(id);
  };
  return (
    <article className={clsx(s.userCard, isSelectedCard && s.userCardSelected)}>
      {isSelectedCard && <CardDeleteButton className={s.deleteCardButton} />}
      <header className={s.header}>
        <UserCardHeader
          image={'https://makeavatar.io/svgavatars/images/Male.webp'}
          userName={'John Doe'}
          email={'w6NkA@example.com'}
          selectCard={selectCardHandler}
          isSelected={isSelectedCard}
        />
      </header>
      <section className={s.description}>
        <UserCardDescription
          phoneNo={'(272) 790-0888'}
          birthday={'11 November 1974'}
          address={'Billings, Michigan, United States'}
        />
      </section>
    </article>
  );
});
