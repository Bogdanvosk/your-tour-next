import Button from '@/components/common/Button/Button'
import Container from '@/components/common/Container/Container'
import SectionHead from '@/components/common/SectionHead/SectionHead'

import styles from './Info.module.scss'

const Info = () => {
	return (
		<section className={styles.info}>
			<Container>
				<div className={styles.infoWrapper}>
					<SectionHead
						title='Идеальные путешествия существуют'
						subtitle='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
						titleTag='h1'
						classNames={{
							title: styles.infoTitle,
							subtitle: styles.infoSubtitle
						}}
					/>
					<Button variant='info' type='button'>
						Найти тур
					</Button>
				</div>
			</Container>
		</section>
	)
}

export default Info
