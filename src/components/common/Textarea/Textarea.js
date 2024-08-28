import cn from 'classnames'

import styles from './Textarea.module.scss'

const Textarea = ({ name, id, value, onChange, className = '', ...props }) => {
	const onTextareaChange = e => {
		onChange(e.target.value)
	}

	return (
		<textarea
			name={name}
			id={id}
			className={cn(styles.textarea, className)}
			value={value}
			onChange={onTextareaChange}
			{...props}
		/>
	)
}

export default Textarea
