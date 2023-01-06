import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import '../../style.css';
// import s from './Layout.module.scss';

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className='test'>
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
