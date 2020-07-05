import React from 'react';

import { MenuSlide, MenuSlideItem } from './styles';

const SeeClick = ({ children, onPress }) => (
  <button
    type="button"
    onClick={onPress}
    style={{ background: 'none', border: 'none', width: '100%' }}
  >
    {children}
  </button>
);

const SmallMenuRoutes = ({
  clicked, links, actionButton, onPress,
}) => (
  <>
    {clicked ? (
      <MenuSlide>
        {links.map((link) => (
          <SeeClick key={link.name} onPress={onPress}>
            <MenuSlideItem href={link.to}>{link.name}</MenuSlideItem>
          </SeeClick>
        ))}
        {actionButton && (
          <SeeClick onPress={onPress}>
            <MenuSlideItem href={actionButton.to}>
              {actionButton.name}
            </MenuSlideItem>
          </SeeClick>
        )}
      </MenuSlide>
    ) : (
      ''
    )}
  </>
);

export default SmallMenuRoutes;
