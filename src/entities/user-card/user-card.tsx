import s from './user-card.module.scss';
import { UserCardHeader } from '@entities/user-card/user-card-header';
import { UserCardDescription } from '@entities/user-card/user-card-description';
import { CardDeleteButton } from '@features/card-delete-button/card-delete-button';

export const UserCard = () => {
  return (
    <article className={s.userCard}>
      <CardDeleteButton className={s.deleteCardButton} />
      <header className={s.header}>
        <UserCardHeader
          image={'https://makeavatar.io/svgavatars/images/Male.webp'}
          userName={'John Doe'}
          email={'w6NkA@example.com'}
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
};
