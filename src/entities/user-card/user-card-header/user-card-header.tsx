import s from './user-card-header.module.scss';
import { Avatar } from '@shared/ui';

type Props = {
  image: string;
  userName: string;
  email: string;
};

export const UserCardHeader = ({ image, userName, email }: Props) => {
  return (
    <div className={s.userCardHeader}>
      <div className={s.avatar}>
        <Avatar src={image} />
      </div>
      <div className={s.info}>
        <span className={s.userName}>{userName}</span>
        <span className={s.email}>{email}</span>
      </div>
    </div>
  );
};
