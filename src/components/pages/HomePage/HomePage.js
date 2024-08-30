import Action from './Action/Action'
import Find from './Find/Find'
import Footer from './Footer/Footer';
import Header from './Header/Header'
import Info from './Info/Info'
import Reviews from './Reviews/Reviews'
import Stories from './Stories/Stories'
import Tour from './Tour/Tour'
import Travel from './Travel/Travel'

const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<Info />
				<Tour />
				<Find />
				<Reviews />
				<Travel />
				<Stories />
				<Action />
			</main>
			<Footer />
		</>
	)
}

export default HomePage
