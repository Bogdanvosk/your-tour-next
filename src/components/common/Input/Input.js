import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

const Input = ({
	register,
	type,
	placeholder,
	dateValue = '',
	className = '',
	...props
}) => {
	const isIncorrectDate = value => {
		return type === 'date' && !value
	}

	return (
		<input
			{...register}
			type={type}
			placeholder={placeholder}
			className={cn(
				styles.input,
				{
					[styles.hiddenInput]:
						type === 'radio' || type === 'checkbox'
				},
				{ [styles.incorrect]: isIncorrectDate(dateValue) },
				className
			)}
			{...props}
		/>
	)
}

export default Input

Input.propTypes = {
	register: PropTypes.object,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	dateValue: PropTypes.string,
	className: PropTypes.string
}
