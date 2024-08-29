import cn from 'classnames'

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
