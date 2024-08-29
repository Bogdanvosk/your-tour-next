import cn from 'classnames'

import styles from './Label.module.scss'

const Label = ({
	labelValue,
	children,
	isRadio = false,
	title = '',
	radioValue = '',
	className = ''
}) => {
	return (
		<label
			className={cn(
				styles.label,
				{ [styles.radioLabel]: isRadio },
				className
			)}>
			{title !== '' && (
				<span
					className={cn(styles.span, {
						[styles.checked]: radioValue === labelValue
					})}>
					{title}
				</span>
			)}
			{children}
		</label>
	)
}

export default Label
