import Link from 'next/link'

import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

import styles from './NavMenu.module.scss'
import NavMenuItem from '../NavMenuItem/NavMenuItem'

const NavMenu = ({ scrollPosition, items }) => {
	const navMenuItems = items.map(({ link, text }) => (
		<NavMenuItem
			key={`${link}_${text}`}
			link={link}
			scrollPosition={scrollPosition}>
			{text}
		</NavMenuItem>
	))

	return (
		<>
			<ul className={styles.navMenuList}>{navMenuItems}</ul>
			<div
				className={`${styles.navMenuPhone} ${
					scrollPosition > FIXED_NAV_SCROLL_THRESHOLD &&
					styles.navMenuPhoneFixed
				}`}>
				<Link href='tel:+79999999999'>+7 999 999 99 99</Link>
			</div>
		</>
	)
}

export default NavMenu
