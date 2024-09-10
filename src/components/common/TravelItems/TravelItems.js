import PropTypes from 'prop-types';

import TravelItem from '../TravelItem/TravelItem';

import s from './TravelItems.module.scss';

const TravelItems = ({ items }) => {
  return (
    <div className={s.items}>
      {items.map((item, index) => (
        <TravelItem
          key={index}
          img={item.img}
          size={item.size}
          hidden={item.hidden}
        />
      ))}
    </div>
  );
};

export default TravelItems;

TravelItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      size: PropTypes.string,
      hidden: PropTypes.string,
    })
  ),
};
