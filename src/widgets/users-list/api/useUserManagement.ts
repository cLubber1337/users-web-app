import { useQuery } from '@tanstack/react-query';
import { fetchUsersList } from './fetch-users-list';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { IUser } from '@entities/user-card';
import { calculateUserStatistics } from '@entities/user-statistics';

export const useUserManagement = (results: number) => {
  const [data, setData] = useState<IUser[]>([]);

  const {
    isPending,
    error,
    refetch,
    data: queryData,
    isRefetching
  } = useQuery({
    queryKey: ['users', results],
    queryFn: async () => await fetchUsersList(results),
    refetchOnWindowFocus: false
  });

  const deleteUser = useCallback((userId: string) => {
    setData((prevState) => prevState.filter((user) => user.login.uuid !== userId));
  }, []);

  useEffect(() => {
    if (queryData) setData(queryData);
  }, [queryData]);

  const userStatistics = useMemo(() => calculateUserStatistics(data), [data]);

  console.log(isRefetching);
  return {
    isPending,
    data,
    error,
    refetch,
    deleteUser,
    userStatistics,
    isRefetching
  };
};
