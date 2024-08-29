import cn from 'classnames'

import ArrowBottom from '@/components/Icons/ArrowBottom'

import styles from './Select.module.scss'

const Select = ({ register, items, placeholder, className = '' }) => {
	const mappedOptions = items.map(item => (
		<option key={item} value={item}>
			{item}
		</option>
	))

	return (
		<div className={styles.wrapper}>
			<select
				{...register}
				className={cn(styles.select, className)}
				required>
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
