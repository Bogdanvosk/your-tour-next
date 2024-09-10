import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants';

import Icon from '../Icon/Icon';

import s from './Logo.module.scss';

const Logo = ({ scrollPosition }) => {
  const [screenWidth, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Link href='#'>
      <Icon
        name='logo'
        className={cn(
          {
            [s.fixedLogo]: scrollPosition > FIXED_NAV_SCROLL_THRESHOLD,
          },
          { [s.smallLogo]: screenWidth < 640 }
        )}
      />
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  scrollPosition: PropTypes.number,
};
