export const content = {
	header: {
		menuItems: [
			{ text: 'Туры', link: '#tour' },
			{ text: 'Создать тур', link: '#find' },
			{ text: 'Отзывы', link: '#reviews' },
			{ text: 'Истории', link: '#stories' }
		]
	},
	info: {
		title: 'Идеальные путешествия существуют',
		subtitle:
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров'
	},
	tour: {
		title: 'Выбери свой тур',
		tabItems: [
			'Популярные',
			'Авторские',
			'Походы',
			'Сплавы',
			'Велопрогулки'
		],
		cards: [
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
	},
	find: {
		title: 'Собери свой тур',
		subtitle:
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
		cities: [
			'Сараево',
			'Стамбул',
			'Банско',
			'Лейпциг',
			'Пелопоннес',
			'Будапешт',
			'Палермо',
			'Трансильвания',
			'Котор'
		],
		inputs: [
			{
				title: 'Имя',
				formName: 'name',
				type: 'text',
				placeholder: 'Введите ваше имя'
			},
			{
				title: 'Направление',
				formName: 'city',
				type: null,
				placeholder: 'Куда хотите ехать'
			},
			{
				title: 'Email',
				formName: 'email',
				type: 'email',
				placeholder: 'example@mail.com'
			},
			{
				title: 'Телефон',
				formName: 'phone',
				type: null,
				placeholder: null
			}
		]
	},
	reviews: {
		title: 'Отзывы наших путешественников',
		subtitle:
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
		items: [
			{
				text: [
					'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.'
				],
				author: {
					name: 'Мария',
					image: '/images/reviews/review-1.jpg',
					tour: 'Вдали от дома'
				}
			},
			{
				text: [
					'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
					'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.'
				],
				author: {
					name: 'Павел',
					image: '/images/reviews/review-2.jpg',
					tour: 'Путешествие в горы'
				}
			}
		]
	},
	travel: {
		title: 'Фотографии путешествий',
		subtitle:
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
		items: [
			{ img: '/images/travel/travel-1.jpg', size: 'normal', hidden: '' },
			{
				img: '/images/travel/travel-2.jpg',
				size: 'normal',
				hidden: 'lg'
			},
			{
				img: '/images/travel/travel-3.jpg',
				size: 'normal',
				hidden: 'sm'
			},
			{ img: '/images/travel/travel-4.jpg', size: 'normal', hidden: '' },
			{ img: '/images/travel/travel-5.jpg', size: 'narrow', hidden: '' },
			{
				img: '/images/travel/travel-6.jpg',
				size: 'narrow',
				hidden: 'sm'
			},
			{
				img: '/images/travel/travel-7.jpg',
				size: 'narrow',
				hidden: 'lg'
			},
			{ img: '/images/travel/travel-8.jpg', size: 'narrow', hidden: '' },
			{ img: '/images/travel/travel-13.jpg', size: 'narrow', hidden: '' },
			{ img: '/images/travel/travel-9.jpg', size: 'normal', hidden: '' },
			{ img: '/images/travel/travel-10.jpg', size: 'normal', hidden: '' },
			{
				img: '/images/travel/travel-11.jpg',
				size: 'normal',
				hidden: 'sm'
			},
			{
				img: '/images/travel/travel-12.jpg',
				size: 'normal',
				hidden: 'lg'
			}
		]
	},
	stories: {
		title: 'Истории путешествий',
		subtitle:
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров',
		items: [
			{
				title: 'Автостопом в Стамбул',
				text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
				list: ['вкусная еда', 'дешевый транспорт', 'красивый город'],
				img: '/images/stories/stories-1.jpg',
				socials: ['instagram', 'facebook', 'YouTube']
			},
			{
				title: 'Автостопом в Стамбул',
				text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
				list: [],
				img: '/images/stories/stories-2.jpg',
				socials: ['instagram', 'ВКонтакте']
			},
			{
				title: 'Автостопом в Стамбул',
				text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
				list: [],
				img: '/images/stories/stories-3.jpg',
				socials: ['instagram', 'facebook', 'ВКонтакте']
			}
		]
	},
	footer: {
		socialLinks: [
			{
				text: 'instagram',
				iconName: 'instagram'
			},
			{
				text: 'facebook',
				iconName: 'facebook'
			},
			{
				text: 'vkontakte',
				iconName: 'vk'
			}
		]
	}
}
