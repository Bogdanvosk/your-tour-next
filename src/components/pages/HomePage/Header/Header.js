import { useEffect, useState } from 'react'

import styles from './Header.module.scss'

import { Logo, NavMenu } from '@/components/common'
import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

const navMenuItems = [
	{ text: 'Туры', link: '#tour' },
	{ text: 'Создать тур', link: '#find' },
	{ text: 'Отзывы', link: '#reviews' },
	{ text: 'Истории', link: '#stories' }
]

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, {
			passive: true
		})

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`${styles.header} ${
				scrollPosition > FIXED_NAV_SCROLL_THRESHOLD &&
				styles.headerFixed
			}`}>
			<div className='container'>
				<nav className={styles.nav}>
					<div className={styles.navWrapper}>
						<Logo scrollPosition={scrollPosition} />
						<NavMenu
							scrollPosition={scrollPosition}
							items={navMenuItems}
						/>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
