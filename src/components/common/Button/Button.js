import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import s from './Button.module.scss';

const buttonVariants = {
  info: s.infoButton,
  extra: s.extraButton,
  form: s.formButton,
};

const Button = ({
  children,
  variant = 'info',
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        s.button,
        buttonVariants[variant],
        { [s.reset]: type === 'reset' },
        className
      )}
    >
      {children}
      {variant === 'extra' && (
        <Icon name='arrowRight' className={s.arrowRight} />
      )}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['info', 'extra', 'form']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  className: PropTypes.string,
};
