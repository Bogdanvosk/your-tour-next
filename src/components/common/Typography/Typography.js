import cn from 'classnames'

import styles from './Typography.module.scss'

const Typography = ({ variant = 'p', children, className = '', ...props }) => {
	const Component = variant

	return (
		<Component {...props} className={cn(styles[variant], className)}>
			{children}
		</Component>
	)
}

export default Typography
