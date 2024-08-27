import cn from 'classnames'

import { getIcon } from '@/utils/getIcon'

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
	const ArrowRight = getIcon('arrowRight')

	return (
		<button
			{...props}
			type={type}
			className={cn(styles.button, buttonVariants[variant], className)}>
			{children}
			{variant === 'extra' && (
				<ArrowRight className={styles.arrowRight} />
			)}
		</button>
	)
}

export default Button
