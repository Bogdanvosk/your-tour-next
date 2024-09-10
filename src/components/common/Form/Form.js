import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { content } from '@/content';

import Typography from '@/components/common/Typography/Typography';
import Label from '@/components/common/Label/Label';
import Input from '@/components/common/Input/Input';
import GridLayout from '@/components/common/GridLayout/GridLayout';
import Textarea from '@/components/common/Textarea/Textarea';
import Select from '@/components/common/Select/Select';
import Button from '@/components/common/Button/Button';

import s from './Form.module.scss';

const Form = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, adult: data.adult === 'YES' ? true : false };
    console.log(newData);
  };

  const dateFrom = watch('date-from');
  const dateTo = watch('date-to');
  const agree = watch('agree');
  const adult = watch('adult');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <GridLayout>
        {content.find.inputs.map((input, index) => {
          return (
            <Label key={`${input.title}_${index}`} title={input.title}>
              {input.formName === 'city' && (
                <Select
                  register={register(input.title, {
                    required: true,
                  })}
                  items={content.find.cities}
                  placeholder={input.placeholder || ''}
                />
              )}
              {input.formName === 'phone' && (
                <Input
                  register={register(input.title, {
                    required: true,
                  })}
                  type='text'
                  placeholder={input.placeholder || ''}
                  isPhone
                />
              )}
              {(input.type === 'text' || input.type === 'email') && (
                <Input
                  register={register(input.title, {
                    required: true,
                  })}
                  type={input.type}
                  placeholder={input.placeholder || ''}
                />
              )}
            </Label>
          );
        })}
        <Label title='Дата от'>
          <Input
            register={register('date-from', {
              required: true,
            })}
            type='date'
            placeholder='ДД.ММ.ГГГГ'
            max='9999-12-31'
            dateValue={dateFrom}
          />
        </Label>
        <Label title='Дата до'>
          <Input
            register={register('date-to', {
              required: true,
            })}
            type='date'
            placeholder='ДД.ММ.ГГГГ'
            max='9999-12-31'
            dateValue={dateTo}
          />
        </Label>

        <Label title='Комментарий' className={s.labelComment}>
          <Textarea register={register('comment', { required: true })} />
        </Label>

        <Label title='Вам есть 18 лет?' className={s.labelAges}>
          <div className={s.radioWrapper}>
            <Label title='Да' labelValue='YES' radioValue={adult} isRadio>
              <Input
                register={register('adult', { required: true })}
                type='radio'
                value='YES'
              />
            </Label>

            <Label title='Нет' labelValue='NO' radioValue={adult} isRadio>
              <Input
                register={register('adult', { required: true })}
                type='radio'
                value='NO'
              />
            </Label>
          </div>
        </Label>
        <Label className={s.labelTerms}>
          <Input
            register={register('agree', { required: true })}
            type='checkbox'
            className={s.checkInput}
          />

          <Typography
            tag='p'
            size='small'
            className={agree ? s.termsActive : ''}
          >
            <span className={s.termsText}>
              Нажимая кнопку, я принимаю условия{' '}
            </span>
            <Link className={s.termsLink} href='#'>
              Лицензионного договора
            </Link>
          </Typography>
        </Label>
        <div className={s.buttons}>
          <Button variant='form' type='submit'>
            Найти тур
          </Button>
          <Button variant='form' type='reset'>
            Сбросить
          </Button>
        </div>
      </GridLayout>
    </form>
  );
};

export default Form;
