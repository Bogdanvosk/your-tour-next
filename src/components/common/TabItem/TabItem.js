import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './TabItem.module.scss'

const TabItem = ({ item, activeItem, onClick }) => {
	const onSelectItem = () => {
		onClick(item)
	}

	return (
		<button
			className={cn(styles.tab, {
				[styles.tabActive]: activeItem === item
			})}
			onClick={onSelectItem}>
			{item}
		</button>
	)
}

export default TabItem

TabItem.propTypes = {
	item: PropTypes.string,
	activeItem: PropTypes.string,
	onClick: PropTypes.func
}