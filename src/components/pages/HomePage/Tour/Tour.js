import Container from '@/components/common/Container/Container'
import Typography from '@/components/common/Typography/Typography'
import Tabs from '@/components/common/TabItems/Tabs'

import styles from './Tour.module.scss'

const tabItems = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки']

const Tour = () => {
	return (
		<section className={styles.tour}>
			<Container>
				<div className={styles.tourWrapper}>
					<Typography
						tag='h2'
						variant='title'
						className={styles.tourTitle}>
						Выбери свой тур
					</Typography>
					<Tabs items={tabItems} />
					<div className='tour__cards'>
						<div role='button' className='tour__card'>
							<div className='tour__content'>
								<h3 className='tour__card-title'>
									Путешествие в горы
								</h3>
								<p className='small tour__price'>
									от 80 000 руб
								</p>
							</div>
							<div className='tour__image__wrapper'>
								<img
									className='tour__image'
									src='./assets/images/tour/tour-1.jpg'
									alt='Tour'
								/>
							</div>
							<button
								type='button'
								className='button tour__button'>
								Подробнее
							</button>
						</div>
						<div role='button' className='tour__card'>
							<div className='tour__image__wrapper'>
								<img
									className='tour__image'
									src='./assets/images/tour/tour-2.jpg'
									alt='Tour'
								/>
							</div>
							<div className='tour__content'>
								<h3 className='tour__card-title'>
									Путешествие в горы
								</h3>
								<p className='small tour__price'>
									от 80 000 руб
								</p>
							</div>
							<button
								type='button'
								className='button tour__button'>
								Подробнее
							</button>
						</div>
						<div role='button' className='tour__card'>
							<div className='tour__image__wrapper'>
								<img
									className='tour__image'
									src='./assets/images/tour/tour-3.jpg'
									alt='Tour'
								/>
							</div>
							<div className='tour__content'>
								<h3 className='tour__card-title'>
									Путешествие в горы
								</h3>
								<p className='small tour__price'>
									от 80 000 руб
								</p>
							</div>
							<button
								type='button'
								className='button tour__button'>
								Подробнее
							</button>
						</div>
						<div role='button' className='tour__card'>
							<div className='tour__image__wrapper'>
								<img
									className='tour__image'
									src='./assets/images/tour/tour-4.jpg'
									alt='Tour'
								/>
							</div>
							<div className='tour__content'>
								<h3 className='tour__card-title'>
									Путешествие в горы
								</h3>
								<p className='small tour__price'>
									от 80 000 руб
								</p>
							</div>
							<button
								type='button'
								className='button tour__button'>
								Подробнее
							</button>
						</div>
						<div role='button' className='tour__card'>
							<div className='tour__image__wrapper'>
								<img
									className='tour__image'
									src='./assets/images/tour/tour-5.jpg'
									alt='Tour'
								/>
							</div>
							<div className='tour__content'>
								<h3 className='tour__card-title'>
									Путешествие в горы
								</h3>
								<p className='small tour__price'>
									от 80 000 руб
								</p>
							</div>
							<button
								type='button'
								className='button tour__button'>
								Подробнее
							</button>
						</div>
						<div role='button' className='tour__card'>
							<div className='tour__image__wrapper'>
								<img
									className='tour__image'
									src='./assets/images/tour/tour-6.jpg'
									alt='Tour'
								/>
							</div>
							<div className='tour__content'>
								<h3 className='tour__card-title'>
									Путешествие в горы
								</h3>
								<p className='small tour__price'>
									от 80 000 руб
								</p>
							</div>
							<button
								type='button'
								className='button tour__button'>
								Подробнее
							</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Tour
