import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './Textarea.module.scss'

const Textarea = ({ register, className = '', ...props }) => {
	return (
		<textarea
			{...register}
			className={cn(styles.textarea, className)}
			{...props}
		/>
	)
}

export default Textarea

Textarea.propTypes = {
	register: PropTypes.object,
	className: PropTypes.string
}
