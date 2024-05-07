import s from './users-page-wrapper.module.scss';
import { ReactNode } from 'react';

type Props = {
  header: ReactNode;
  main: ReactNode;
  aside: ReactNode;
};

export const UsersPageWrapper = ({ header, main, aside }: Props) => {
  return (
    <div className={s.usersPageWrapper}>
      <header className={s.header}>{header}</header>
      <main className={s.main}>{main}</main>
      <aside className={s.aside}>{aside}</aside>
      <footer className={s.footer}></footer>
    </div>
  );
};
