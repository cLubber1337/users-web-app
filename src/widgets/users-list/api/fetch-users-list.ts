import { IUser } from '@entities/user-card';

const BASE_URL = ' https://randomuser.me/api';

export const fetchUsersList = async (results: number): Promise<IUser[]> => {
  const response = await fetch(`${BASE_URL}/?results=${results}`);
  const data = await response.json();
  return data.results;
};
