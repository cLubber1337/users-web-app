import s from './user-card-description.module.scss';

type Props = {
  phoneNo: string;
  birthday: string;
  address: string;
};

export const UserCardDescription = ({ phoneNo, birthday, address }: Props) => {
  return (
    <div className={s.UserCardDescription}>
      <p className={s.field}>Phone No</p>
      <p>{phoneNo}</p>

      <p className={s.field}>Birthday</p>
      <p>{birthday}</p>

      <p className={s.field}>Address</p>
      <p>{address}</p>
    </div>
  );
};
