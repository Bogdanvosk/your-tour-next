import Container from '@/components/common/Container/Container'
import Cards from '@/components/common/Cards/Cards'
import Typography from '@/components/common/Typography/Typography'
import Tabs from '@/components/common/TabItems/Tabs'

const tabItems = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки']

const cardItems = [
	{
		title: 'Путешествие в горы',
		price: '80 000',
		img: '/images/tour/tour-1.jpg'
	},
	{
		title: 'Путешествие в горы',
		price: '80 000',
		img: '/images/tour/tour-2.jpg'
	},
	{
		title: 'Путешествие в горы',
		price: '80 000',
		img: '/images/tour/tour-3.jpg'
	},
	{
		title: 'Путешествие в горы',
		price: '80 000',
		img: '/images/tour/tour-4.jpg'
	},
	{
		title: 'Путешествие в горы',
		price: '80 000',
		img: '/images/tour/tour-5.jpg'
	},
	{
		title: 'Путешествие в горы',
		price: '80 000',
		img: '/images/tour/tour-6.jpg'
	}
]

const Tour = () => {
	return (
		<section>
			<Container>
				<Typography tag='h2' variant='title'>
					Выбери свой тур
				</Typography>
				<Tabs items={tabItems} />
				<Cards items={cardItems} />
			</Container>
		</section>
	)
}

export default Tour
