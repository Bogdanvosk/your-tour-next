import Button from '@/components/common/Button/Button'
import Container from '@/components/common/Container/Container'
import Typography from '@/components/common/Typography/Typography'

import styles from './Info.module.scss'

const Info = () => {
	return (
		<section className={styles.info}>
			<Container>
				<div className={styles.infoWrapper}>
					<Typography
						tag='h1'
						variant='title'
						className={`${styles.infoTitle}`}>
						Идеальные путешествия существуют
					</Typography>
					<Typography
						tag='p'
						variant='subtitle'
						size='normal'
						className={`${styles.infoSubtitle}`}>
						Идейные соображения высшего порядка, а также рамки и
						место обучения кадров
					</Typography>
					<Button variant='info' type='button'>
						Найти тур
					</Button>
				</div>
			</Container>
		</section>
	)
}

export default Info
