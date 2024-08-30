import { getIcon } from '@/utils/getIcon'

const Icon = ({ name, className = '', fill, ...props }) => {
	const SVGIcon = getIcon(name)
	return <SVGIcon className={className} fill={fill} {...props} />
}

export default Icon
