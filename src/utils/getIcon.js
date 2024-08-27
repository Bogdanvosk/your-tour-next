import ArrowBottom from '@/components/Icons/ArrowBottom'
import ArrowRight from '@/components/Icons/ArrowRight'
import Facebook from '@/components/Icons/Facebook'
import Instagram from '@/components/Icons/Instagram'
import LogoIcon from '@/components/Icons/LogoIcon'
import Vk from '@/components/Icons/Vk'

export const getIcon = iconName => {
	switch (iconName) {
		case 'logo':
			return LogoIcon

		case 'arrowRight':
			return ArrowRight

		case 'arrowBottom':
			return ArrowBottom

		case 'facebook':
			return Facebook

		case 'instagram':
			return Instagram

		case 'vk':
			return Vk

		default:
			break
	}
}
