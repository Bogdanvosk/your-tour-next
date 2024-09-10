import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './TravelItem.module.scss';

const TravelItem = ({ img, size, hidden }) => {
  return (
    <div
      className={cn(s.item, {
        [s.narrow]: size === 'narrow',
        [s[hidden]]: hidden !== '',
      })}
    >
      <img className={s.image} src={img} alt='Travel photo' />
    </div>
  );
};

export default TravelItem;

TravelItem.propTypes = {
  img: PropTypes.string,
  size: PropTypes.string,
  hidden: PropTypes.string,
};
