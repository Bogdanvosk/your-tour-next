import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';

import s from './SocialLinks.module.scss';

const SocialLinks = ({ socialLinks }) => {
  return (
    <ul className={s.socials}>
      {socialLinks.map((item, index) => (
        <li key={index} className={s.socialItem}>
          <Typography tag='a' href='#' size='normal' className={s.link}>
            <Icon name={item.iconName} className={s.icon} />
            <span>{item.text}</span>
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

SocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      iconName: PropTypes.string,
    })
  ),
};
