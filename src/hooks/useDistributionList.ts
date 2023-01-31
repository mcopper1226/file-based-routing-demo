import { ListDistributionsCommandOutput } from '@aws-sdk/client-cloudfront';
import { useQuery } from '@tanstack/react-query';
import distributionData from '../sample-data/distributions.json';

export const useDistributionListQuery = () => ({
  queryKey: ['cf', 'distributions', 'list'],
  queryFn: (): Promise<ListDistributionsCommandOutput> => {
    return new Promise((resolve) => {
      // @ts-ignore
      resolve(distributionData);
    });
  }
});

export const useDistributionList = () => {
  const query = useQuery(useDistributionListQuery());
  return query;
};

export default useDistributionList;
