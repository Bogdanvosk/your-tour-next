import Link from 'next/link'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

import NavMenuItem from '../NavMenuItem/NavMenuItem'

import styles from './NavMenu.module.scss'

const NavMenuItems = ({ scrollPosition, items }) => {
	return (
		<ul className={styles.navMenuList}>
			{items.map(({ link, text }) => (
				<NavMenuItem
					key={`${link}_${text}`}
					link={link}
					scrollPosition={scrollPosition}>
					{text}
				</NavMenuItem>
			))}
		</ul>
	)
}

const NavMenu = ({ scrollPosition, items }) => {
	return (
		<>
			<NavMenuItems scrollPosition={scrollPosition} items={items} />
			<div
				className={cn(styles.navMenuPhone, {
					[styles.navMenuPhoneFixed]:
						scrollPosition > FIXED_NAV_SCROLL_THRESHOLD
				})}>
				<Link href='tel:+79999999999'>+7 999 999 99 99</Link>
			</div>
		</>
	)
}

export default NavMenu

NavMenu.propTypes = {
	scrollPosition: PropTypes.number,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string
		})
	)
}
