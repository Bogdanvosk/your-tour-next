import Image from 'next/image'
import PropTypes from 'prop-types'

import Typography from '../Typography/Typography'

import styles from './ReviewsItem.module.scss'

const ReviewsItem = ({ text, author }) => {
	return (
		<div className={styles.item}>
			<div className={styles.text}>
				{text.map((item, index) => (
					<Typography tag='p' size='big' key={index}>
						{item}
					</Typography>
				))}
			</div>

			<div className={styles.author}>
				<div>
					<Typography tag='h3'>{author.name}</Typography>
					<Typography tag='p' size='small' className={styles.tour}>
						Тур: {author.tour}
					</Typography>
				</div>
				<div className={styles.avatar}>
					<Image
						width={75}
						height={75}
						src={author.image}
						alt='Avatar'
					/>
				</div>
			</div>
		</div>
	)
}

export default ReviewsItem

ReviewsItem.propTypes = {
	text: PropTypes.arrayOf(PropTypes.string),
	author: PropTypes.shape({
		name: PropTypes.string,
		tour: PropTypes.string,
		image: PropTypes.string
	})
}
