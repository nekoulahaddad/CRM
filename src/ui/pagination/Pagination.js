import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { Icon, Text } from 'components/ui'
import styles from './pagination.module.sass'

const Pagination = ({ className, mobile }) => {
	const { t } = useTranslation(['common'])

	const paginationClassList = cn(
		styles.pagination,
		className
	)

	if (mobile) {
		return (
			<Text
				className={cn(styles.pagination, styles['pagination-mobile'])}
				decoration='underline'
				size='md'
			>
				{t('words.showMore')}
			</Text>
		)
	}

	return (
		<div className={paginationClassList}>
			<div className={cn(styles.square, styles.disabled)}>
				<Icon name='arrow-left' size='sm' />
			</div>
			<div className={cn(styles.square, styles.active)}>
				<Text size='sm'>1</Text>
			</div>
			<div className={cn(styles.square)}>
				<Text size='sm'>2</Text>
			</div>
			<div className={cn(styles.square, styles.ellipsis)}>
				<Text size='sm'>...</Text>
			</div>
			<div className={cn(styles.square)}>
				<Text size='sm'>9</Text>
			</div>
			<div className={cn(styles.square)}>
				<Text size='sm'>10</Text>
			</div>
			<div className={styles.square}>
				<Icon name='arrow-right' size='sm' />
			</div>
		</div>
	)
}

Pagination.propTypes = {
	className: PropTypes.string,
	mobile: PropTypes.bool
}

export default Pagination
