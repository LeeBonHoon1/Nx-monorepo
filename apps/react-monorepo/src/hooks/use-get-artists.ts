import { useQuery } from '@tanstack/react-query';
import APIs from '../apis';

const useGetArtists = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['artists'],
    queryFn: APIs.getArtist,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetArtists;
