import PropTypes from 'prop-types';

import CardItem from '../CardItem/CardItem';

import s from './Cards.module.scss';

const Cards = ({ items }) => {
  return (
    <div className={s.cards}>
      {items.map((item, index) => (
        <CardItem key={`${item.title}_${index}`} {...item} />
      ))}
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.string,
      img: PropTypes.string,
    })
  ),
};
