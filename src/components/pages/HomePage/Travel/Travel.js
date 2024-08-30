import SectionHead from '@/components/common/SectionHead/SectionHead'
import TravelItems from '@/components/common/TravelItems/TravelItems'

const travelItems = [
	{ img: '/images/travel/travel-1.jpg', size: 'normal', hidden: '' },
	{ img: '/images/travel/travel-2.jpg', size: 'normal', hidden: 'lg' },
	{ img: '/images/travel/travel-3.jpg', size: 'normal', hidden: 'sm' },
	{ img: '/images/travel/travel-4.jpg', size: 'normal', hidden: '' },
	{ img: '/images/travel/travel-5.jpg', size: 'narrow', hidden: '' },
	{ img: '/images/travel/travel-6.jpg', size: 'narrow', hidden: 'sm' },
	{ img: '/images/travel/travel-7.jpg', size: 'narrow', hidden: 'lg' },
	{ img: '/images/travel/travel-8.jpg', size: 'narrow', hidden: '' },
	{ img: '/images/travel/travel-13.jpg', size: 'narrow', hidden: '' },
	{ img: '/images/travel/travel-9.jpg', size: 'normal', hidden: '' },
	{ img: '/images/travel/travel-10.jpg', size: 'normal', hidden: '' },
	{ img: '/images/travel/travel-11.jpg', size: 'normal', hidden: 'sm' },
	{ img: '/images/travel/travel-12.jpg', size: 'normal', hidden: 'lg' }
]

const Travel = () => {
	return (
		<section>
			<SectionHead
				title='Фотографии путешествий'
				subtitle='Идейные соображения высшего порядка, а также рамки и место
				обучения кадров'
			/>
			<TravelItems items={travelItems} />
		</section>
	)
}

export default Travel
