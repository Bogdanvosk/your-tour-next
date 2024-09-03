import { content } from '@/content'

import Container from '@/components/common/Container/Container'
import SectionHead from '@/components/common/SectionHead/SectionHead'
import StoriesItems from '@/components/common/StoriesItems/StoriesItems'

const Stories = () => {
	return (
		<section>
			<Container>
				<SectionHead
					title={content.stories.title}
					subtitle={content.stories.subtitle}
				/>

				<StoriesItems items={content.stories.items} />
			</Container>
		</section>
	)
}

export default Stories
