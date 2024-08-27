import cn from 'classnames'

import styles from './Typography.module.scss'

const typographyVariants = {
	title: styles.title,
	subtitle: styles.subtitle
}

const typographySizes = {
	small: styles.small,
	normal: styles.normal,
	big: styles.big
}

const Typography = ({
	tag = 'h1',
	variant = '',
	size = '',
	className = '',
	children,
	...props
}) => {
	const Component = tag

	return (
		<Component
			{...props}
			className={cn(
				styles[tag],
				typographyVariants[variant],
				typographySizes[size],
				className
			)}>
			{children}
		</Component>
	)
}

export default Typography
