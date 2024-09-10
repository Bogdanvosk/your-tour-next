import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import Typography from '@/components/common/Typography/Typography';

import s from './Action.module.scss';

const Action = () => {
  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <div className={s.imageWrapper}>
            <img
              width={370}
              height={370}
              className={s.image}
              src='/images/action.jpg'
              alt='Action'
            />
          </div>
          <div className={s.content}>
            <Typography tag='h3' className={s.title}>
              Пора в путешествие вместе с нами!
            </Typography>
            <Typography tag='p' size='normal' className={s.text}>
              Напиши на почту и узнай подробности на{' '}
              <Link className={s.mail} href='mailto:yourtour@gmail.com'>
                yourtour@gmail.com
              </Link>
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Action;
