import PropTypes from 'prop-types'

import CardItem from '../CardItem/CardItem'

import styles from './Cards.module.scss'

const Cards = ({ items }) => {
	return (
		<div className={styles.cards}>
			{items.map((item, index) => (
				<CardItem key={`${item.title}_${index}`} {...item} />
			))}
		</div>
	)
}

export default Cards

Cards.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			price: PropTypes.string,
			img: PropTypes.string
		})
	)
}
