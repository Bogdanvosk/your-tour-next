import cn from 'classnames'
import PropTypes from 'prop-types'

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

Label.propTypes = {
	labelValue: PropTypes.string,
	children: PropTypes.node,
	isRadio: PropTypes.bool,
	title: PropTypes.string,
	radioValue: PropTypes.string,
	className: PropTypes.string
}
