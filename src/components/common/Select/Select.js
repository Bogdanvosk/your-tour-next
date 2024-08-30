import cn from 'classnames'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

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
			<Icon name='arrowBottom' className={styles.arrowBottom} />
		</div>
	)
}

export default Select

Select.propTypes = {
	register: PropTypes.object,
	items: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
	className: PropTypes.string
}
