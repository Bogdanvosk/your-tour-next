import { content } from '@/content'

import Container from '@/components/common/Container/Container'
import ReviewsItems from '@/components/common/ReviewsItems/ReviewsItems'
import SectionHead from '@/components/common/SectionHead/SectionHead'

import styles from './Reviews.module.scss'

const Reviews = () => {
	return (
		<section>
			<Container>
				<SectionHead
					title={content.reviews.title}
					subtitle={content.reviews.subtitle}
					classNames={{ title: styles.title }}
				/>
				<ReviewsItems items={content.reviews.items} />
			</Container>
		</section>
	)
}

export default Reviews
