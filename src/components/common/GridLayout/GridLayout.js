import cn from 'classnames'

import styles from './GridLayout.module.scss'

const GridLayout = ({ children, className = '' }) => {
	return <div className={cn(styles.grid, className)}>{children}</div>
}

export default GridLayout
