import { useLoaderData, NavLink } from 'react-router-dom';
import { UserData, userListQuery } from './index.loader';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  // const data = useLoaderData() as UserData[];

  const { data } = useQuery(userListQuery());

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {Array.isArray(data) &&
          data.map((user) => (
            <li key={user.id}>
              <NavLink
                to={`${user.id}`}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                {user.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Page;
