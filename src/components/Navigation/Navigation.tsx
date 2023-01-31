import { NavLink, Outlet, useNavigation, useNavigate } from 'react-router-dom';
import * as React from 'react';
import SideNavigation from '@cloudscape-design/components/side-navigation';

const Navigation = () => {
  const [activeHref, setActiveHref] = React.useState('#/page2');
  const navigate = useNavigate();

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: '#/', text: 'Service name' }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
          navigate(event.detail.href);
        }
      }}
      items={[
        { type: 'link', text: 'Page 1', href: '#/page1' },
        { type: 'link', text: 'Page 2', href: '#/page2' },
        {
          type: 'section',
          text: 'Users',
          items: [
            {
              type: 'link',
              text: 'List All',
              href: '/users'
            },
            {
              type: 'link',
              text: 'Page 5',
              href: '#/page5'
            },
            {
              type: 'link',
              text: 'Page 6',
              href: '#/page6'
            }
          ]
        },
        {
          type: 'section',
          text: 'Distributions',
          items: [
            {
              type: 'link',
              text: 'List All',
              href: '/distributions'
            },
            {
              type: 'link',
              text: 'Page 8',
              href: '#/page8'
            },
            {
              type: 'link',
              text: 'Page 9',
              href: '#/page9'
            }
          ]
        }
      ]}
    />
  );
};

export default Navigation;
