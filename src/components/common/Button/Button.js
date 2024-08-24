
const Button = ({ children, variant = 'info', type = 'button' }) => {
	return (
		<button
			type={type}
			className={`button`}>
			{children}
		</button>
	)
}

export default Button
