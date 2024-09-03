import { content } from '@/content'

import Container from '@/components/common/Container/Container'
import Typography from '@/components/common/Typography/Typography'
import SocialLinks from '@/components/common/SocialLinks/SocialLinks'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<Typography tag='p' size='normal' className={styles.title}>
						Наши социальные сети
					</Typography>
					<SocialLinks socialLinks={content.footer.socialLinks} />
				</div>
			</Container>
		</footer>
	)
}

export default Footer
