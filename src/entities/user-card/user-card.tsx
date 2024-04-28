import s from './user-card.module.scss';
import { UserCardHeader } from './user-card-header/user-card-header';
import { UserCardDescription } from './user-card-description/user-card-description';

type Props = {};

export const UserCard = ({}: Props) => {
  return (
    <article className={s.userCard}>
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
