import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import '../../style.scss';
import s from './Layout.module.scss';

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className={s.sidebar}>
        <h1>File-Based Routing Example</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="todos">Todo List</NavLink>
            </li>
            <li>
              <NavLink to="users">User List</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
