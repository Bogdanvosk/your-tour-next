import { FIXED_NAV_SCROLL_THRESHOLD } from '@/constants';
import Image from 'next/image'
import React from 'react'

const Logo = ({ scrollPosition }) => {
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
					width={182}
					height={30}
					priority={true}
					src='/images/logo.svg'
					alt='logo'
				/>
			</picture>
		</a>
	)
}

export default Logo
