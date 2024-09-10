import { content } from '@/content';

import Button from '@/components/common/Button/Button';
import Container from '@/components/common/Container/Container';
import SectionHead from '@/components/common/SectionHead/SectionHead';

import s from './Info.module.scss';

const Info = () => {
  return (
    <section className={s.info}>
      <Container>
        <div className={s.infoWrapper}>
          <SectionHead
            title={content.info.title}
            subtitle={content.info.subtitle}
            titleTag='h1'
            classNames={{
              title: s.infoTitle,
              subtitle: s.infoSubtitle,
            }}
          />
          <Button variant='info' type='button'>
            Найти тур
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Info;
