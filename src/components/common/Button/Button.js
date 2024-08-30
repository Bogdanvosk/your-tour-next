import cn from 'classnames'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

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
			className={cn(
				styles.button,
				buttonVariants[variant],
				{ [styles.reset]: type === 'reset' },
				className
			)}>
			{children}
			{variant === 'extra' && (
				<Icon name='arrowRight' className={styles.arrowRight} />
			)}
		</button>
	)
}

export default Button

Button.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf(['info', 'extra', 'form']),
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
	className: PropTypes.string
}