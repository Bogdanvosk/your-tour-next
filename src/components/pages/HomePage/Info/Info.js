import Button from '@/components/common/Button/Button'
import Typography from '@/components/common/Typography/Typography'

import styles from './Info.module.scss'

const Info = () => {
	return (
		<section className={styles.info}>
			<div className='container'>
				<div className={styles.infoWrapper}>
					<Typography
						variant='h1'
						className={`${styles.infoTitle} title`}>
						Идеальные путешествия существуют
					</Typography>
					<Typography
						variant='p'
						className={`${styles.infoSubtitle} subtitle normal`}>
						Идейные соображения высшего порядка, а также рамки и
						место обучения кадров
					</Typography>
					<Button variant='info' type='button'>
						Найти тур
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Info
