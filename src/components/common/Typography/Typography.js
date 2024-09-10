import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Typography.module.scss';

const typographyVariants = {
  title: s.title,
  subtitle: s.subtitle,
};

const typographySizes = {
  small: s.small,
  normal: s.normal,
  big: s.big,
};

const Typography = ({
  tag = 'h1',
  variant = '',
  size = '',
  className = '',
  children,
  ...props
}) => {
  const Component = tag;

  return (
    <Component
      {...props}
      className={cn(
        s[tag],
        typographyVariants[variant],
        typographySizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;

Typography.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
