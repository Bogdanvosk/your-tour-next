import Container from '@/components/common/Container/Container'
import Form from '@/components/common/Form/Form'
import SectionHead from '@/components/common/SectionHead/SectionHead'

const Find = () => {
	return (
		<section>
			<Container>
				<SectionHead
					title='Собери свой тур'
					subtitle='Идейные соображения высшего порядка, а также рамки и место
					обучения кадров'
				/>
				<Form />
			</Container>
		</section>
	)
}

export default Find
