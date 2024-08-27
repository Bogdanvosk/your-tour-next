import HeadLayout from '@/components/common/HeadLayout/HeadLayout'
import HomePage from '@/components/pages/HomePage/HomePage'

export default function Home() {
	return (
		<>
			<HeadLayout favicon='/favicon-32.png' title='Your tour' />
			<HomePage />
		</>
	)
}
