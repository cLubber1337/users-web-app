import s from './user-card-body.module.scss';

type Props = {
  phoneNo: string;
  birthday: string;
  city: string;
  state: string;
  country: string;
};

export const UserCardBody = ({ phoneNo, birthday, city, state, country }: Props) => {
  return (
    <div className={s.UserCardDescription}>
      <p className={s.field}>Phone No</p>
      <p>{phoneNo}</p>

      <p className={s.field}>Birthday</p>
      <p>{birthday}</p>

      <p className={s.field}>Address</p>
      <p>
        <span>{city}</span>, <span>{state}</span>, <span>{country}</span>
      </p>
    </div>
  );
};
