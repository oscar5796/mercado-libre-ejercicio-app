import useSWR from 'swr';
import {fetcher} from '../apiRequests/urlBuild';

export const useItems = (url) =>  {
  const { data, error } = useSWR(url, fetcher);

  return {
    items: data,
    isLoading: !error && !data,
    isError: error
  }
}