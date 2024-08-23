import Head from 'next/head'

import { HomePage } from '@/components/pages'

export default function Home() {
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/icons/favicon-32.png'
				/>
				<title>Your tour</title>
				<meta property='og:title' content='Your tour' />
				<meta
					name='description'
					content='Идейные соображения высшего порядка,а также рамки и место обучения кадров'
				/>
				<meta
					property='og:description'
					content='Идейные соображения высшего порядка,а также рамки и место обучения кадров'
				/>
				<meta
					name='keywords'
					content='путешествие, собери свой тур, автостопом'
				/>
			</Head>
			<HomePage />
		</>
	)
}
