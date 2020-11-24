import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const AppMenu = () => {
  const [activeItem, setActiveItem] = useState('all projects');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div>
      <Menu
        pointing
        secondary
        size='massive'
        style={{ backgroundColor: 'white' }}
      >
        <Menu.Item header>Franjk Portfolio</Menu.Item>
        <Menu.Item
          name='all projects'
          active={activeItem === 'all projects'}
          onClick={handleItemClick}
          as={Link}
          to={'/'}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
          as={Link}
          to={'/about'}
        />
      </Menu>
    </div>
  );
};

export default AppMenu;
