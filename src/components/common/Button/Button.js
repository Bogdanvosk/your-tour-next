import styles from './Button.module.scss'
import cn from 'classnames'

const buttonVariants = {
	info: styles.infoButton,
	extra: styles.extraButton,
	form: styles.formButton
}

const Button = ({ children, variant = 'info', type = 'button', ...props }) => {
	return (
		<button
			{...props}
			type={type}
			className={cn(
				styles.button,
				buttonVariants[variant],
				props.className ? props.className : ''
			)}>
			{children}
		</button>
	)
}

export default Button
