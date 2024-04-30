import { useQuery } from '@tanstack/react-query';
import { fetchUsersList } from './fetch-users-list';

export const useGetUsersList = (results: number) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsersList.bind(null, results),
    refetchOnWindowFocus: false
  });
};
