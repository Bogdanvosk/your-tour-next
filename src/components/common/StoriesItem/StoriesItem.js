import Link from 'next/link'
import cn from 'classnames'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import Typography from '../Typography/Typography'

import styles from './StoriesItem.module.scss'

const StoriesItem = ({ item }) => {
	return (
		<div className={styles.item}>
			<img className={styles.image} src={item.img} alt='Story' />
			<Typography tag='h3' className={styles.title}>
				{item.title}
			</Typography>
			<Typography tag='p' size='normal' className={styles.text}>
				{item.text}
			</Typography>
			{item.list.length ? (
				<ul className={styles.list}>
					{item.list.map((item, index) => {
						return (
							<li key={index} className={styles.listItem}>
								{item}
							</li>
						)
					})}
				</ul>
			) : null}
			<div
				className={cn(styles.footer, {
					[styles.footerBig]: item.list.length
				})}>
				<Button type='button' className={styles.button} variant='extra'>
					Подробнее
				</Button>
				<ul className={styles.links}>
					{item.socials.map((item, index) => {
						return (
							<Typography
								key={index}
								tag='li'
								className={styles.link}
								size='normal'>
								<Link href='#'>{item}</Link>
							</Typography>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default StoriesItem

StoriesItem.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		text: PropTypes.string,
		list: PropTypes.arrayOf(PropTypes.string),
		img: PropTypes.string,
		socials: PropTypes.arrayOf(PropTypes.string)
	})
}
