import { IUser } from '@entities/user-card';

export function calculateUserStatistics(users: IUser[]) {
  return users.reduce(
    (acc, user) => {
      const { dob, gender } = user;

      if (dob.age >= 11 && dob.age <= 20) {
        acc.sections[0].data[0].value += 1;
      } else if (dob.age >= 21 && dob.age <= 30) {
        acc.sections[0].data[1].value += 1;
      } else if (dob.age >= 31 && dob.age <= 40) {
        acc.sections[0].data[2].value += 1;
      } else if (dob.age >= 41 && dob.age <= 50) {
        acc.sections[0].data[3].value += 1;
      } else if (dob.age >= 51) {
        acc.sections[0].data[4].value += 1;
      }

      if (gender === 'male') {
        acc.sections[1].data[0].value += 1;
      } else if (gender === 'female') {
        acc.sections[1].data[1].value += 1;
      }

      return acc;
    },
    {
      totalUsers: users.length,
      sections: [
        {
          section: 'Age Groups',
          data: [
            { property: '11 to 20', value: 0 },
            { property: '21 to 30', value: 0 },
            { property: '31 to 40', value: 0 },
            { property: '41 to 50', value: 0 },
            { property: '51+', value: 0 }
          ]
        },
        {
          section: 'Gender Groups',
          data: [
            { property: 'Male', value: 0 },
            { property: 'Female', value: 0 }
          ]
        }
      ]
    }
  );
}
