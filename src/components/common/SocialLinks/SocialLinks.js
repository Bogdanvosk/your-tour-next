import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'
import Typography from '../Typography/Typography'

import styles from './SocialLinks.module.scss'

const SocialLinks = ({ socialLinks }) => {
	return (
		<ul className={styles.socials}>
			{socialLinks.map((item, index) => (
				<li key={index} className={styles.socialItem}>
					<Typography
						tag='a'
						href='#'
						size='normal'
						className={styles.link}>
						<Icon name={item.iconName} className={styles.icon} />
						<span>{item.text}</span>
					</Typography>
				</li>
			))}
		</ul>
	)
}

export default SocialLinks

SocialLinks.propTypes = {
	socialLinks: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			iconName: PropTypes.string
		})
	)
}
