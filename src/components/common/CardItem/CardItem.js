import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Typography from '../Typography/Typography';

import s from './CardItem.module.scss';

const CardItem = ({ title, price, img }) => {
  return (
    <div role='button' className={s.card}>
      <div className={s.content}>
        <Typography tag='h3' className={s.title}>
          {title}
        </Typography>
        <Typography tag='p' size='small' className={s.price}>
          от {price} руб
        </Typography>
      </div>
      <div className={s.imageWrapper}>
        <Image
          width={370}
          height={533}
          className={s.image}
          src={img}
          alt='Tour'
        />
      </div>
      <Button type='button' variant='extra' className={s.button}>
        Подробнее
      </Button>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
};
