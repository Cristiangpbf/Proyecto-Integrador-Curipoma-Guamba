
import useSWR from 'swr';
import API from './index';

export const useProductCategory = (id, options= {} ) => {
    const { data, error } = useSWR( `/product/${id}/category/`, API.fetcher, options );

    return {
        productCategory: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};
