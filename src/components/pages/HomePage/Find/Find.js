import { useState } from 'react'

import Container from '@/components/common/Container/Container'
import Typography from '@/components/common/Typography/Typography'
import Label from '@/components/common/Label/Label'
import Input from '@/components/common/Input/Input'
import GridLayout from '@/components/common/GridLayout/GridLayout'
import Textarea from '@/components/common/Textarea/Textarea'
import Select from '@/components/common/Select/Select'

import styles from './Find.module.scss'

const cities = [
	'Сараево',
	'Стамбул',
	'Банско',
	'Лейпциг',
	'Пелопоннес',
	'Будапешт',
	'Палермо',
	'Трансильвания',
	'Котор'
]

const Find = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [city, setCity] = useState('')
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const [comment, setComment] = useState('')

	return (
		<section className={styles.find}>
			<Container>
				<div className={styles.wrapper}>
					<Typography tag='h2' variant='title'>
						Собери свой тур
					</Typography>
					<Typography tag='p' variant='subtitle' size='normal'>
						Идейные соображения высшего порядка, а также рамки и
						место обучения кадров
					</Typography>
					<form className={styles.form}>
						<GridLayout>
							<Label
								htmlFor='name'
								title='Имя'
								className={styles.label}>
								<Input
									id='name'
									value={name}
									onChange={setName}
									type='text'
									placeholder='Введите Ваше имя'
								/>
							</Label>
							<Label htmlFor='country' title='Направление'>
								<Select
									items={cities}
									value={city}
									onChange={setCity}
									placeholder='Куда хотите ехать'
								/>
							</Label>
							<Label htmlFor='email' title='Email'>
								<Input
									id='email'
									value={email}
									onChange={setEmail}
									type='email'
									placeholder='example@mail.com'
								/>
							</Label>
							<Label htmlFor='phone' title='Телефон'>
								<Input
									id='phone'
									value={phone}
									onChange={setPhone}
									type='number'
									placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
								/>
							</Label>
							<Label htmlFor='date-from' title='Дата от'>
								<Input
									id='date-from'
									value={dateFrom}
									onChange={setDateFrom}
									type='date'
									max='9999-12-31'
									placeholder='ДД.ММ.ГГГГ'
									className='find__input colored'
								/>
							</Label>

							<Label htmlFor='date-to' title='Дата до'>
								<Input
									id='date-to'
									value={dateTo}
									onChange={setDateTo}
									type='date'
									max='9999-12-31'
									placeholder='ДД.ММ.ГГГГ'
									className='find__input colored'
								/>
							</Label>

							<Label
								htmlFor='comment'
								title='Комментарий'
								className={styles.labelComment}>
								<Textarea
									value={comment}
									onChange={setComment}
									id='comment'
									name='comment'
								/>
							</Label>

							<label
								className='find__label find__label-ages'
								htmlFor='age'>
								<span className='find__label-span'>
									Вам есть 18 лет?
								</span>
								<div className='find__radio'>
									<label
										className='find__label find__label-check'
										htmlFor='age-yes'>
										<input
											className='find__input-radio'
											type='radio'
											name='age'
											id='age-yes'
										/>
										<span className='find__label-span'>
											Да
										</span>
									</label>
									<label
										className='find__label find__label-check'
										htmlFor='age-no'>
										<input
											className='find__input-radio'
											type='radio'
											name='age'
											id='age-no'
										/>
										<span className='find__label-span'>
											Нет
										</span>
									</label>
								</div>
							</label>

							<label
								className='find__label find__label-terms'
								htmlFor='terms'>
								<input
									className='find__input-check'
									type='checkbox'
									id='terms'
								/>
								<p className='small find__terms'>
									<span className='find__terms-text'>
										Нажимая кнопку, я принимаю условия
									</span>{' '}
									<a href='#'>Лицензионного договора</a>
								</p>
							</label>

							<div className='find__buttons'>
								<button type='submit' className='find__button'>
									Найти тур
								</button>
								<button
									type='reset'
									className='find__button find__button-reset'>
									Сбросить
								</button>
							</div>
						</GridLayout>
					</form>
				</div>
			</Container>
		</section>
	)
}

export default Find
