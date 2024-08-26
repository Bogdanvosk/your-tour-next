import cn from 'classnames'

import styles from './Button.module.scss'

const buttonVariants = {
	info: styles.infoButton,
	extra: styles.extraButton,
	form: styles.formButton
}

const Button = ({
	children,
	variant = 'info',
	type = 'button',
	className = '',
	...props
}) => {
	return (
		<button
			{...props}
			type={type}
			className={cn(styles.button, buttonVariants[variant], className)}>
			{children}
		</button>
	)
}

export default Button
