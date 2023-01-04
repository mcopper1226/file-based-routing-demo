import { useEffect } from 'react';
import { useLoaderData, NavLink, useSearchParams } from 'react-router-dom';

const Page = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1>Todo Items</h1>
      <ul>
        {/* @ts-ignore */}
        {data.map((todo) => (
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
