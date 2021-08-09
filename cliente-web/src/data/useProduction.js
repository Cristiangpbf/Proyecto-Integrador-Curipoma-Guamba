import useSWR from 'swr';
import API from './index';

export const useProduction = (id, options= {} ) => {
    const { data, error } = useSWR( `/productions/${ id }`, API.fetcher, options );

    return {
        production: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
