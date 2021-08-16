import useSWR from 'swr';
import API from './index';

export const useOrdersAdmin = () => {

    const { data, error, mutate } = useSWR( '/orders', API.fetcher );

    return {
        orders: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};