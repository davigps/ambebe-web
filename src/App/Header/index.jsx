import React, { useRef, useState, useEffect } from 'react';

import Menu from './subcomponents/Menu';

import { Container, Title, LogoSpace } from './styles';

function Header({
  logo, title, links, actionButton,
}) {
  const [menuSize, setMenuSize] = useState(null);
  const [useSmall, setUseSmall] = useState(false);

  const containerElem = useRef(null);
  const menuElem = useRef(null);
  const logoSpace = useRef(null);

  useEffect(() => {
    const createMenu = () => {
      const containerWidth = containerElem.current
        ? containerElem.current.offsetWidth
        : 0;
      if (menuElem.current) setMenuSize(menuElem.current.offsetWidth);
      const logoWidth = logoSpace.current ? logoSpace.current.offsetWidth : 0;

      if (menuSize + logoWidth > containerWidth - 23) {
        if (!useSmall) setUseSmall(true);
      } else if (useSmall) {
        setUseSmall(false);
      }
    };

    if (typeof window !== 'undefined') window.onresize = createMenu;
    createMenu();
  }, [menuSize, useSmall]);

  return (
    <Container ref={containerElem}>
      <LogoSpace ref={logoSpace} href="/#inicio">
        {logo ? <img src={logo} alt="Logo" /> : ''}
        <Title>{title}</Title>
      </LogoSpace>

      <Menu
        useSmall={useSmall}
        forwardRef={menuElem}
        links={links}
        actionButton={actionButton}
      />
    </Container>
  );
}

export default Header;
