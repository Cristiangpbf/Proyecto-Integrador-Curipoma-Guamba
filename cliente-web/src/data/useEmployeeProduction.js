import useSWR from 'swr';
import API from './index';

export const useEmployeeProduction = (id, options= {} ) => {
    const { data, error } = useSWR( `/employee/${id}/production`, API.fetcher, options );

    return {
        employeeprod: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};