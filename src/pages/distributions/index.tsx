import DistributionTable from '../../components/DistributionTable';
import useDistributionList from '../../hooks/useDistributionList';
const Page = () => {
  // const data = useLoaderData();
  const { data } = useDistributionList();

  console.log('DATA', data);

  return (
    <div>
      <h1>Distributions</h1>

      <DistributionTable />

      <ul>
        {data &&
          data.DistributionList?.Items?.map((item) => <li>{item.ARN}</li>)}
      </ul>
    </div>
  );
};

export default Page;
