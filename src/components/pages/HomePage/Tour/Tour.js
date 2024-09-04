import { content } from '@/content'

import Container from '@/components/common/Container/Container'
import Cards from '@/components/common/Cards/Cards'
import Typography from '@/components/common/Typography/Typography'
import Tabs from '@/components/common/TabItems/Tabs'

const Tour = () => {
	return (
		<section>
			<Container>
				<Typography tag='h2' variant='title'>
					{content.tour.title}
				</Typography>
				<Tabs items={content.tour.tabItems} />
				<Cards items={content.tour.cards} />
			</Container>
		</section>
	)
}

export default Tour
