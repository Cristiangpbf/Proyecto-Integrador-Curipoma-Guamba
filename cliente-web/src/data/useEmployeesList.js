import useSWR from 'swr';
import API from './index';

export const useEmployeesList = () => {

    const { data, error, mutate } = useSWR( '/employees', API.fetcher );

    return {
        employees: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};