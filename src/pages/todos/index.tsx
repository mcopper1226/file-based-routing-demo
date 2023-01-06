import { useEffect } from 'react';
import { useLoaderData, NavLink, useSearchParams } from 'react-router-dom';
import {  todoListQuery } from './index.loader';
import { useQuery } from '@tanstack/react-query';


const Page = () => {
  // const data = useLoaderData();
  const { data } = useQuery(todoListQuery());

  return (
    <div>
      <h1>Todo Items</h1>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <NavLink
              to={`${todo.id}`}
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              {todo.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
