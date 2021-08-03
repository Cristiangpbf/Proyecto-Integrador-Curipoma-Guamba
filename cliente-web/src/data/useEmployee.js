import useSWR from 'swr';
import API from './index';

export const useEmployee = (id, options= {} ) => {
    const { data, error } = useSWR( `/employees/${ id }`, API.fetcher, options );

    return {
        employee: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
