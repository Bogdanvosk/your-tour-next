import { useEffect, useState } from 'react'
import cn from 'classnames'

import { getIcon } from '@/utils/getIcon'
import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

import styles from './Logo.module.scss'

const Logo = ({ scrollPosition }) => {
	const LogoIcon = getIcon('logo')
	const [screenWidth, setWidth] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<a href='#'>
			<LogoIcon
				className={cn(
					{
						[styles.fixedLogo]:
							scrollPosition > FIXED_NAV_SCROLL_THRESHOLD
					},
					{ [styles.smallLogo]: screenWidth < 640 }
				)}
			/>
		</a>
	)
}

export default Logo
