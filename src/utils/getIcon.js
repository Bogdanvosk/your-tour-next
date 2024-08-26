import ArrowRight from '@/components/Icons/ArrowRight'
import LogoIcon from '@/components/Icons/LogoIcon'

export const getIcon = iconName => {
	switch (iconName) {
		case 'logo':
			return LogoIcon

		case 'arrowRight':
			return ArrowRight

		default:
			break
	}
}
