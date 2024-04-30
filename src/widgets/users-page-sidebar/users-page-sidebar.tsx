import s from './users-page-sidebar.module.scss';

const userStatistic = [
  {
    section: 'Age Groups',
    data: [
      { property: '11 to 20', value: '52 users' },
      { property: '21 to 30', value: '108 users' },
      { property: '31 to 40', value: '52 users' },
      { property: '41 to 50', value: '54 users' },
      { property: '51+', value: '30 users' }
    ]
  },
  {
    section: 'Gender Groups',
    data: [
      { property: 'Male', value: '544 users' },
      { property: 'Female', value: '456 users' }
    ]
  }
];

export const UsersPageSidebar = () => {
  return (
    <div className={s.sidebar}>
      <section>
        <h2 className={s.title}>1000 Users</h2>
      </section>
      {userStatistic.map(({ section, data }) => {
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
