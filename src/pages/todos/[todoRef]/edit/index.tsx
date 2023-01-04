import { useLoaderData, useParams } from 'react-router-dom';

const Test = () => {
  const data = useLoaderData();
  const { todoRef } = useParams();
  return <div>Edit Todo {todoRef} </div>;
};

export default Test;
