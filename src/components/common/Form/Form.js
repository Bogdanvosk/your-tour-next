import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Typography from '@/components/common/Typography/Typography'
import Label from '@/components/common/Label/Label'
import Input from '@/components/common/Input/Input'
import GridLayout from '@/components/common/GridLayout/GridLayout'
import Textarea from '@/components/common/Textarea/Textarea'
import Select from '@/components/common/Select/Select'
import Button from '@/components/common/Button/Button'

import styles from './Form.module.scss'

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

const Form = () => {
	const { register, handleSubmit, watch } = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	const dateFrom = watch('date-from')
	const dateTo = watch('date-to')
	const agree = watch('agree')
	const age = watch('age')

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<GridLayout>
				<Label title='Имя'>
					<Input
						register={register('name', { required: true })}
						type='text'
						placeholder='Введите Ваше имя'
					/>
				</Label>
				<Label title='Направление'>
					<Select
						register={register('city', { required: true })}
						items={cities}
						placeholder='Куда хотите ехать'
					/>
				</Label>
				<Label title='Email'>
					<Input
						register={register('email', { required: true })}
						type='email'
						placeholder='example@mail.com'
					/>
				</Label>
				<Label title='Телефон'>
					<Input
						register={register('phone', {
							required: true,
							onChange: e => {
								e.target.value = e.target.value.slice(0, 11)
							}
						})}
						type='number'
						placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
					/>
				</Label>
				<Label title='Дата от'>
					<Input
						register={register('date-from', { required: true })}
						dateValue={dateFrom}
						type='date'
						max='9999-12-31'
						placeholder='ДД.ММ.ГГГГ'
					/>
				</Label>
				<Label title='Дата до'>
					<Input
						register={register('date-to', { required: true })}
						dateValue={dateTo}
						type='date'
						max='9999-12-31'
						placeholder='ДД.ММ.ГГГГ'
					/>
				</Label>
				<Label title='Комментарий' className={styles.labelComment}>
					<Textarea register={register('comment')} />
				</Label>

				<Label title='Вам есть 18 лет?' className={styles.labelAges}>
					<div className={styles.radioWrapper}>
						<Label
							title='Да'
							labelValue='YES'
							radioValue={age}
							isRadio>
							<Input
								register={register('age', { required: true })}
								type='radio'
								value='YES'
							/>
						</Label>

						<Label
							title='Нет'
							labelValue='NO'
							radioValue={age}
							isRadio>
							<Input
								register={register('age', { required: true })}
								type='radio'
								value='NO'
							/>
						</Label>
					</div>
				</Label>

				<Label className={styles.labelTerms}>
					<Input
						register={register('agree', { required: true })}
						type='checkbox'
						className={styles.checkInput}
					/>

					<Typography
						tag='p'
						size='small'
						className={agree && styles.termsActive}>
						<span className={styles.termsText}>
							Нажимая кнопку, я принимаю условия{' '}
						</span>
						<Link className={styles.termsLink} href='#'>
							Лицензионного договора
						</Link>
					</Typography>
				</Label>

				<div className={styles.buttons}>
					<Button variant='form' type='submit'>
						Найти тур
					</Button>
					<Button variant='form' type='reset'>
						Сбросить
					</Button>
				</div>
			</GridLayout>
		</form>
	)
}

export default Form
