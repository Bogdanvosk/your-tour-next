import Container from '@/components/common/Container/Container'
import ReviewsItems from '@/components/common/ReviewsItems/ReviewsItems'
import SectionHead from '@/components/common/SectionHead/SectionHead'

import styles from './Reviews.module.scss'

const reviewsItems = [
	{
		text: [
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.'
		],
		author: {
			name: 'Мария',
			image: '/images/reviews/review-1.jpg',
			tour: 'Вдали от дома'
		}
	},
	{
		text: [
			'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
			'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.'
		],
		author: {
			name: 'Павел',
			image: '/images/reviews/review-2.jpg',
			tour: 'Путешествие в горы'
		}
	}
]

const Reviews = () => {
	return (
		<section>
			<Container>
				<SectionHead
					title='Отзывы наших путешественников'
					subtitle='Идейные соображения высшего порядка, а также рамки и место
					обучения кадров'
					classNames={{ title: styles.title }}
				/>
				<ReviewsItems items={reviewsItems} />
			</Container>
		</section>
	)
}

export default Reviews
