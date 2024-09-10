import Link from 'next/link';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants';

import s from './NavMenuItem.module.scss';

const NavMenuItem = ({ link, scrollPosition, children }) => {
  return (
    <li
      className={cn(s.navMenuItem, {
        [s.navMenuItemFixed]: scrollPosition > FIXED_NAV_SCROLL_THRESHOLD,
      })}
    >
      <Link href={link}>{children}</Link>
    </li>
  );
};

export default NavMenuItem;

NavMenuItem.propTypes = {
  link: PropTypes.string,
  scrollPosition: PropTypes.number,
  children: PropTypes.node,
};
