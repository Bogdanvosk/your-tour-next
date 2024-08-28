import cn from 'classnames'

import ArrowBottom from '@/components/Icons/ArrowBottom'

import styles from './Select.module.scss'

const Select = ({ items, placeholder, value, onChange, className = '' }) => {
	const mappedOptions = items.map(item => (
		<option key={item} value={item}>
			{item}
		</option>
	))

	const onSelectItem = e => {
		onChange(e.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<select
				value={value}
				onChange={onSelectItem}
				required
				className={cn(styles.select, className)}>
				<option value='' hidden disabled selected>
					{placeholder}
				</option>
				{mappedOptions}
			</select>
			<ArrowBottom className={styles.arrowBottom} />
		</div>
	)
}

export default Select
