import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './TravelItem.module.scss'

const TravelItem = ({ img, size, hidden }) => {
	console.log('hidden', hidden)

	return (
		<div
			className={cn(styles.item, {
				[styles.narrow]: size === 'narrow',
				[styles[hidden]]: hidden !== ''
			})}>
			<img className={styles.image} src={img} alt='Travel photo' />
		</div>
	)
}

export default TravelItem

TravelItem.propTypes = {
	img: PropTypes.string,
	size: PropTypes.string,
	hidden: PropTypes.string
}
