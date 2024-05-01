import type { UsersStats } from '../model/types';
import s from './user-statistics.module.scss';

type Props = {
  data: UsersStats;
};

export const UserStatistics = ({ data }: Props) => {
  const { totalUsers, sections } = data;

  return (
    <div className={s.statistics}>
      <section>
        <h2 className={s.title}>{totalUsers} Users</h2>
      </section>
      {sections.map(({ section, data }) => {
        return (
          <section
            key={section}
            className={s.section}>
            <h3 className={s.subtitle}>{section}</h3>
            {data.map(({ property, value }) => {
              return (
                <p
                  className={s.properties}
                  key={property}>
                  <span className={s.property}>{property}</span>
                  <span className={s.value}>{value}</span>
                </p>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};
