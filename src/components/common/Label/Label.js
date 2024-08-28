import cn from 'classnames'

import styles from './Label.module.scss'

const Label = ({ title = '', htmlFor, children, className = '' }) => {
	// TODO: add prop "withSpan" and paint span if true, else paint children
	return (
		<label htmlFor={htmlFor} className={cn(styles.label, className)}>
			{title !== '' && <span className={styles.span}>{title}</span>}
			{children}
		</label>
	)
}

export default Label
