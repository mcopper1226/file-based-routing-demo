import { useDistributionListQuery } from '../../hooks/useDistributionList';

export const loader = (queryClient: any) => async () => {
  const query = useDistributionListQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export default loader;
