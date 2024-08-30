import Container from '@/components/common/Container/Container'

import styles from './Action.module.scss'
import Typography from '@/components/common/Typography/Typography'
import Link from 'next/link'

const Action = () => {
	return (
		<section>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.imageWrapper}>
						<img
							width={370}
							height={370}
							className={styles.image}
							src='/images/action.jpg'
							alt='Action'
						/>
					</div>
					<div className={styles.content}>
						<Typography tag='h3' className={styles.title}>
							Пора в путешествие вместе с нами!
						</Typography>
						<Typography
							tag='p'
							size='normal'
							className={styles.text}>
							Напиши на почту и узнай подробности на{' '}
							<Link
								className={styles.mail}
								href='mailto:yourtour@gmail.com'>
								yourtour@gmail.com
							</Link>
						</Typography>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Action
