import Link from 'next/link'
import React from 'react'

import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

import styles from './NavMenuItem.module.scss'

const NavMenuItem = ({ link, scrollPosition, children }) => {
	return (
		<li
			className={`${styles.navMenuItem} ${
				scrollPosition > FIXED_NAV_SCROLL_THRESHOLD &&
				styles.navMenuItemFixed
			}`}>
			<Link href={link} className={styles.navMenuLink}>
				{children}
			</Link>
		</li>
	)
}

export default NavMenuItem
