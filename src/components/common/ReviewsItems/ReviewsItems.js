import PropTypes from 'prop-types';

import ReviewsItem from '../ReviewsItem/ReviewsItem';

import s from './ReviewsItems.module.scss';

const ReviewsItems = ({ items }) => {
  return (
    <div className={s.items}>
      {items.map((item, index) => {
        return (
          <ReviewsItem key={index} text={item.text} author={item.author} />
        );
      })}
    </div>
  );
};

export default ReviewsItems;

ReviewsItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.arrayOf(PropTypes.string),
      author: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        tour: PropTypes.string,
      }),
    })
  ),
};
