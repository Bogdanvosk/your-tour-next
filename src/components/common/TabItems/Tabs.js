import { useState } from 'react'

import TabItem from '../TabItem/TabItem'

import styles from './Tabs.module.scss'

const Tabs = ({ items }) => {
	const [activeItem, setActiveItem] = useState('Популярные')

	const onSelectItem = item => {
		setActiveItem(item)
	}

	return (
		<div className={styles.tabs}>
			{items.map((item, index) => (
				<TabItem
					key={`${item}_${index}`}
					item={item}
					activeItem={activeItem}
					onClick={onSelectItem}
				/>
			))}
		</div>
	)
}

export default Tabs
