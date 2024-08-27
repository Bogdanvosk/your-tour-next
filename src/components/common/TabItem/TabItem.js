import cn from 'classnames'

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
