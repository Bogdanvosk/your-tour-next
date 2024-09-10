import { content } from '@/content';

import Container from '@/components/common/Container/Container';
import Typography from '@/components/common/Typography/Typography';
import SocialLinks from '@/components/common/SocialLinks/SocialLinks';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <Typography tag='p' size='normal' className={s.title}>
            Наши социальные сети
          </Typography>
          <SocialLinks socialLinks={content.footer.socialLinks} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
