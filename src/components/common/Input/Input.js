import cn from 'classnames';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import s from './Input.module.scss';

const Input = ({
  register,
  type,
  placeholder,
  isPhone = false,
  dateValue = '',
  className = '',
  ...props
}) => {
  const isIncorrectDate = (value) => {
    return type === 'date' && !value;
  };

  if (isPhone) {
    return (
      <InputMask
        {...register}
        type={type}
        className={cn(s.input, className)}
        mask={'+7 (999) 999-99-99'}
        maskChar={''}
        placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
        {...props}
      />
    );
  }

  return (
    <input
      {...register}
      type={type}
      placeholder={placeholder}
      className={cn(
        s.input,
        {
          [s.hiddenInput]: type === 'radio' || type === 'checkbox',
        },
        { [s.incorrect]: isIncorrectDate(dateValue) },
        className
      )}
      {...props}
    />
  );
};

export default Input;

Input.propTypes = {
  register: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  dateValue: PropTypes.string,
  className: PropTypes.string,
};
