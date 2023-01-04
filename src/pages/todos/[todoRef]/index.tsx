import { useLoaderData, Link, useParams } from 'react-router-dom';
import { TodoData } from './index.loader';

const Page = () => {
  const data = useLoaderData() as TodoData;
  const { todoRef } = useParams();

  return (
    <div>
      <h1>Todo Item: {todoRef} </h1>
      <em>{data.title}</em>
      <p>
        Belongs to <Link to={`/users/${data.userId}`}>user {data.userId}</Link>
      </p>
      <Link to="edit">Edit this Todo Item</Link>
    </div>
  );
};

export default Page;
