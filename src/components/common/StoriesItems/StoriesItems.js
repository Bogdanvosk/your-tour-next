import PropTypes from 'prop-types'

import StoriesItem from '../StoriesItem/StoriesItem'

import styles from './StoriesItems.module.scss'

const StoriesItems = ({ items }) => {
	return (
		<div className={styles.items}>
			{items.map((item, index) => {
				return <StoriesItem key={index} item={item} />
			})}
		</div>
	)
}

export default StoriesItems

StoriesItems.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			text: PropTypes.string,
			list: PropTypes.arrayOf(PropTypes.string),
			img: PropTypes.string,
			socials: PropTypes.arrayOf(PropTypes.string)
		})
	)
}
