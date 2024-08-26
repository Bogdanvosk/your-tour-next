import { useEffect, useState } from 'react'
import Image from 'next/image'

import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants'

const Logo = ({ scrollPosition }) => {
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
			<picture>
				{scrollPosition > FIXED_NAV_SCROLL_THRESHOLD ? (
					<>
						<source
							srcSet='/images/logo-black-small.svg'
							media='(max-width: 640px)'
						/>
						<source
							srcSet='/images/logo-black.svg'
							media='(min-width: 640px)'
						/>
					</>
				) : (
					<>
						<source
							srcSet='/images/logo-small.svg'
							media='(max-width: 640px)'
						/>
						<source
							srcSet='/images/logo.svg'
							media='(min-width: 640px)'
						/>
					</>
				)}

				<Image
					width={screenWidth > 640 ? 182 : 133}
					height={screenWidth > 640 ? 32 : 22}
					priority={true}
					src='/images/logo.svg'
					alt='logo'
				/>
			</picture>
		</a>
	)
}

export default Logo
