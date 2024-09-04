import { content } from '@/content'

import Container from '@/components/common/Container/Container'
import Form from '@/components/common/Form/Form'
import SectionHead from '@/components/common/SectionHead/SectionHead'

const Find = () => {
	return (
		<section>
			<Container>
				<SectionHead
					title={content.find.title}
					subtitle={content.find.subtitle}
				/>
				<Form />
			</Container>
		</section>
	)
}

export default Find
