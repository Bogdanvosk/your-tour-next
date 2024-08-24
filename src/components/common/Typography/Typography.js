import cn from 'classnames'

import styles from './Typography.module.scss'

const Typography = ({ variant = 'p', children, ...props }) => {
	const Component = variant

	return (
		<Component {...props} className={cn(styles[variant], props.className)}>
			{children}
		</Component>
	)
}

export default Typography
