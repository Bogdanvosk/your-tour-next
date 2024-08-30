import Typography from '../Typography/Typography'

const SectionHead = ({ title, subtitle, classNames = {}, titleTag = 'h2' }) => {
	return (
		<>
			<Typography
				tag={titleTag}
				variant='title'
				className={classNames.title}>
				{title}
			</Typography>
			<Typography
				tag='p'
				variant='subtitle'
				size='normal'
				className={classNames.subtitle}>
				{subtitle}
			</Typography>
		</>
	)
}

export default SectionHead
