import Find from './Find/Find'
import Header from './Header/Header'
import Info from './Info/Info'
import Reviews from './Reviews/Reviews'
import Tour from './Tour/Tour'

const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<Info />
				<Tour />
				<Find />
				<Reviews />
			</main>
		</>
	)
}

export default HomePage
