import { useParams } from 'react-router-dom';
import { userDetailQuery } from './index.loader';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const { id } = useParams() as { id: string };
  const { data } = useQuery(userDetailQuery(id));

  return (
    <div>
      <ul>
        <li>Name: {data?.name}</li>
        <li>Username: {data?.username} </li>
        <li>Username: {data?.email} </li>
      </ul>
    </div>
  );
};

export default Page;
