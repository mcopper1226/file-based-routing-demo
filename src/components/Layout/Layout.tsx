import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import '../../style.css';
import { AppLayout, Modal } from '@cloudscape-design/components';
import Navigation from '../Navigation';
import PageWrapper from '../PageWrapper';
import { Notifications } from '../Notifications/Notification';
import { useModal } from '../../context/ModalContext';
import styles from './layout.module.css';

const Layout = () => {
  const navigation = useNavigation();
  const { modal } = useModal();
  return (
    <>
      <AppLayout
        navigation={<Navigation />}
        notifications={<Notifications successNotification />}
        content={
          <div className={navigation.state === 'loading' ? styles.loading : ''}>
            <PageWrapper>
              <Outlet />
            </PageWrapper>
          </div>
        }
      />
      {modal && <Modal {...modal} />}
    </>
  );
};

export default Layout;
