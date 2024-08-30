import Image from 'next/image'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import Typography from '../Typography/Typography'

import styles from './CardItem.module.scss'

const CardItem = ({ title, price, img }) => {
	return (
		<div role='button' className={styles.card}>
			<div className={styles.content}>
				<Typography tag='h3' className={styles.title}>
					{title}
				</Typography>
				<Typography tag='p' size='small' className={styles.price}>
					от {price} руб
				</Typography>
			</div>
			<div className={styles.imageWrapper}>
				<Image
					width={370}
					height={533}
					className={styles.image}
					src={img}
					alt='Tour'
				/>
			</div>
			<Button type='button' variant='extra' className={styles.button}>
				Подробнее
			</Button>
		</div>
	)
}

export default CardItem

CardItem.propTypes = {
	title: PropTypes.string,
	price: PropTypes.string,
	img: PropTypes.string
}
