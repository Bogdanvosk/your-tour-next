import { useEffect, useState } from 'react'
import cn from 'classnames'

import { content } from '@/content'
import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

import Container from '@/components/common/Container/Container'
import Logo from '@/components/common/Logo/Logo'
import NavMenu from '@/components/common/NavMenu/NavMenu'

import styles from './Header.module.scss'

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
			className={cn(styles.header, {
				[styles.headerFixed]:
					scrollPosition > FIXED_NAV_SCROLL_THRESHOLD
			})}>
			<Container>
				<nav className={styles.nav}>
					<div className={styles.navWrapper}>
						<Logo scrollPosition={scrollPosition} />
						<NavMenu
							scrollPosition={scrollPosition}
							items={content.header.menuItems}
						/>
					</div>
				</nav>
			</Container>
		</header>
	)
}

export default Header
