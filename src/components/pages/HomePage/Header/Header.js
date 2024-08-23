import { useEffect, useState } from 'react'

import styles from './Header.module.scss'

import { Logo } from '@/components/common'

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
				scrollPosition > 450 && styles.headerFixed
			}`}>
			<div className='container'>
				<nav className={styles.nav}>
					<div className={styles.navWrapper}>
						<Logo scrollPosition={scrollPosition} />
						<div className={styles.navMenu}>
							<ul className={styles.navMenuList}>
								<li
									className={`${styles.navMenuItem} ${
										scrollPosition > 450 &&
										styles.navMenuItemFixed
									}`}>
									<a
										href='#tour'
										className={styles.navMenuLink}>
										Туры
									</a>
								</li>
								<li
									className={`${styles.navMenuItem} ${
										scrollPosition > 450 &&
										styles.navMenuItemFixed
									}`}>
									<a
										href='#find'
										className={styles.navMenuLink}>
										Создать тур
									</a>
								</li>
								<li
									className={`${styles.navMenuItem} ${
										scrollPosition > 450 &&
										styles.navMenuItemFixed
									}`}>
									<a
										href='#reviews'
										className={styles.navMenuLink}>
										Отзывы
									</a>
								</li>
								<li
									className={`${styles.navMenuItem} ${
										scrollPosition > 450 &&
										styles.navMenuItemFixed
									}`}>
									<a
										href='#stories'
										className={styles.navMenuLink}>
										Истории
									</a>
								</li>
							</ul>
						</div>
						<div
							className={`${styles.navMenuPhone} ${
								scrollPosition > 450 && styles.navMenuPhoneFixed
							}`}>
							<a href='tel:+79999999999'>+7 999 999 99 99</a>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
