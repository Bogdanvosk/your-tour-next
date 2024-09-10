import Link from 'next/link';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import s from './StoriesItem.module.scss';

const StoriesItem = ({ item }) => {
  return (
    <div className={s.item}>
      <img className={s.image} src={item.img} alt='Story' />
      <Typography tag='h3' className={s.title}>
        {item.title}
      </Typography>
      <Typography tag='p' size='normal' className={s.text}>
        {item.text}
      </Typography>
      {item.list.length ? (
        <ul className={s.list}>
          {item.list.map((item, index) => {
            return (
              <li key={index} className={s.listItem}>
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
      <div
        className={cn(s.footer, {
          [s.footerBig]: item.list.length,
        })}
      >
        <Button type='button' className={s.button} variant='extra'>
          Подробнее
        </Button>
        <ul className={s.links}>
          {item.socials.map((item, index) => {
            return (
              <Typography key={index} tag='li' className={s.link} size='normal'>
                <Link href='#'>{item}</Link>
              </Typography>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StoriesItem;

StoriesItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    img: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.string),
  }),
};
