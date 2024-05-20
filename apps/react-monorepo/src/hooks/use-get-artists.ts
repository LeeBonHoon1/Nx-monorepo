import { useQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query';
import APIs from '../apis';
import { Products } from '../types';
import { AxiosError } from 'axios';

// Extend the options to match UseQueryOptions and add default value for options
const useGetProducts = (
  options?: UseQueryOptions<Products[], AxiosError, Products[]>
) => {
  const queryOptions: UseQueryOptions<
    Products[],
    AxiosError,
    Products[],
    QueryKey
  > = {
    queryKey: [options?.queryKey],
    queryFn: APIs.getArtist,
    ...(options ?? {}),
  };

  const { data, error, isLoading } = useQuery<
    Products[],
    AxiosError,
    Products[],
    QueryKey
  >(queryOptions);

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetProducts;
