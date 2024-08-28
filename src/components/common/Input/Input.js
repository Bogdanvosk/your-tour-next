import cn from 'classnames'

import styles from './Input.module.scss'

const Input = ({
	id,
	type,
	placeholder,
	value,
	onChange,
	className = '',
	...props
}) => {
	const isIncorrectDate = value => {
		return type === 'date' && !value
	}

	const onInputChange = e => {
		if (id === 'phone') onChange(e.target.value.slice(0, 11))
		else onChange(e.target.value)
	}

	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onInputChange}
			className={cn(
				styles.input,
				{ [styles.incorrect]: isIncorrectDate(value) },
				className
			)}
			{...props}
		/>
	)
}

export default Input
