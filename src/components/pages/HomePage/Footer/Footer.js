import Container from '@/components/common/Container/Container'
import Typography from '@/components/common/Typography/Typography'
import SocialLinks from '@/components/common/SocialLinks/SocialLinks'

import styles from './Footer.module.scss'

const socialLinks = [
	{
		text: 'instagram',
		iconName: 'instagram'
	},
	{
		text: 'facebook',
		iconName: 'facebook'
	},
	{
		text: 'vkontakte',
		iconName: 'vk'
	}
]

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<Typography tag='p' size='normal' className={styles.title}>
						Наши социальные сети
					</Typography>
					<SocialLinks socialLinks={socialLinks} />
				</div>
			</Container>
		</footer>
	)
}

export default Footer
