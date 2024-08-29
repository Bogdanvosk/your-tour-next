import cn from 'classnames'

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
