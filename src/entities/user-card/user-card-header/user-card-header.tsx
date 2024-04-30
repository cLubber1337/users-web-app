import s from './user-card-header.module.scss';
import { Avatar } from '@shared/ui';
import clsx from 'clsx';

type Props = {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  selectCard: () => void;
  isSelected?: boolean;
};

export const UserCardHeader = ({
  image,
  firstName,
  lastName,
  email,
  selectCard,
  isSelected
}: Props) => {
  return (
    <div className={s.userCardHeader}>
      <div className={s.avatar}>
        <Avatar
          className={clsx(isSelected && s.selectedAvtar)}
          src={image}
          onClick={selectCard}
        />
      </div>
      <div className={s.info}>
        <p className={s.userName}>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </p>
        <span className={s.email}>{email}</span>
      </div>
    </div>
  );
};
