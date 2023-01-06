import { useLoaderData, Link, useParams } from 'react-router-dom';

import {  TodoData, todoDetailQuery } from './index.loader';
import { useQuery } from '@tanstack/react-query';


const Page = () => {
  const { todoRef } = useParams() as {todoRef: string};
  const { data } = useQuery(todoDetailQuery(todoRef));
 

  return (
    <div>
      <h1>Todo Item: {todoRef} </h1>
      <em>{data?.title}</em>
      <p>
        Belongs to <Link to={`/users/${data?.userId}`}>user {data?.userId}</Link>
      </p>
      <Link to="edit">Edit this Todo Item</Link>
    </div>
  );
};

export default Page;
