import Container from '@/components/common/Container/Container'
import Typography from '@/components/common/Typography/Typography'
import Form from '@/components/common/Form/Form'

const Find = () => {
	return (
		<section>
			<Container>
				<Typography tag='h2' variant='title'>
					Собери свой тур
				</Typography>
				<Typography tag='p' variant='subtitle' size='normal'>
					Идейные соображения высшего порядка, а также рамки и место
					обучения кадров
				</Typography>
				<Form />
			</Container>
		</section>
	)
}

export default Find
