import React, { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';

import {
  MenuNormal,
  MenuNormalItem,
  ActionButton,
  SmallMenu,
  MenuBar,
} from './styles';

import SmallMenuRoutes from './SmallMenuRoutes';

function Menu({
  links, actionButton, forwardRef, useSmall,
}) {
  const [clicked, setClicked] = useState(false);

  const handleMenu = () => {
    setClicked(!clicked);
  };

  const bar1 = { transform: 'rotate(-45deg) translate(-9px, 6px)' };
  const bar2 = { opacity: 0 };
  const bar3 = { transform: 'rotate(45deg) translate(-8px, -8px)' };

  return (
    <>
      {useSmall ? (
        <>
          <SmallMenu onClick={handleMenu}>
            <MenuBar style={clicked ? bar1 : {}} />
            <MenuBar style={clicked ? bar2 : {}} />
            <MenuBar style={clicked ? bar3 : {}} />
          </SmallMenu>
          <ActionButton to={actionButton.to}>
            <FaArrowAltCircleDown size={25} />
          </ActionButton>
          <SmallMenuRoutes
            links={links}
            actionButton={actionButton}
            clicked={clicked}
            onPress={handleMenu}
          />
        </>
      ) : (
        <MenuNormal ref={forwardRef}>
          {links.map((link) => (
            <MenuNormalItem key={Math.random()} to={link.to}>
              {link.name}
            </MenuNormalItem>
          ))}
          {actionButton ? (
            <ActionButton to={actionButton.to}>
              {actionButton.name}
              <FaArrowAltCircleDown size={25} style={{ marginLeft: '10px' }} />
            </ActionButton>
          ) : (
            ''
          )}
        </MenuNormal>
      )}
    </>
  );
}

export default Menu;
