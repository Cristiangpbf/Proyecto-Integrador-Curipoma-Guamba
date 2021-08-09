import useSWR from 'swr';
import API from './index';

export const useProductsList = () => {

  const { data, error, mutate } = useSWR( '/products', API.fetcher );

  return {
    productsList: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};
