import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './GridLayout.module.scss'

const GridLayout = ({ children, className = '' }) => {
	return <div className={cn(styles.grid, className)}>{children}</div>
}

export default GridLayout

GridLayout.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}
