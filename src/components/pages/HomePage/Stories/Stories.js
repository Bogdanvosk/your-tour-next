import Container from '@/components/common/Container/Container'
import SectionHead from '@/components/common/SectionHead/SectionHead'
import StoriesItems from '@/components/common/StoriesItems/StoriesItems'

const storiesItems = [
	{
		title: 'Автостопом в Стамбул',
		text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
		list: ['вкусная еда', 'дешевый транспорт', 'красивый город'],
		img: '/images/stories/stories-1.jpg',
		socials: ['instagram', 'facebook', 'YouTube']
	},
	{
		title: 'Автостопом в Стамбул',
		text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
		list: [],
		img: '/images/stories/stories-2.jpg',
		socials: ['instagram', 'ВКонтакте']
	},
	{
		title: 'Автостопом в Стамбул',
		text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
		list: [],
		img: '/images/stories/stories-3.jpg',
		socials: ['instagram', 'facebook', 'ВКонтакте']
	}
]

const Stories = () => {
	return (
		<section>
			<Container>
				<SectionHead
					title='Истории путешествий'
					subtitle='Идейные соображения высшего порядка, а также рамки и место обучения кадров'
				/>

				<StoriesItems items={storiesItems} />
			</Container>
		</section>
	)
}

export default Stories
