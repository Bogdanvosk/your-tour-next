import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Label.module.scss';

const Label = ({
  labelValue,
  children,
  isRadio = false,
  title = '',
  radioValue = '',
  className = '',
}) => {
  return (
    <label className={cn(s.label, { [s.radioLabel]: isRadio }, className)}>
      {title !== '' && (
        <span
          className={cn(s.span, {
            [s.checked]: radioValue === labelValue,
          })}
        >
          {title}
        </span>
      )}
      {children}
    </label>
  );
};

export default Label;

Label.propTypes = {
  labelValue: PropTypes.string,
  children: PropTypes.node,
  isRadio: PropTypes.bool,
  title: PropTypes.string,
  radioValue: PropTypes.string,
  className: PropTypes.string,
};
