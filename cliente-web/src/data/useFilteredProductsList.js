import useSWR from 'swr';
import API from './index';

export const useFilteredProductsList = (aux) => {

  const { data, error, mutate } = useSWR( `/products/category/`%{aux}, API.fetcher );

  return {
    products: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};
