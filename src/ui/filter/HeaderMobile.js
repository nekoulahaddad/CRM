import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/ui'
import styles from './filter.module.sass'

const HeaderMobile = ({ children, title }) => (
	<div className={styles['header-mobile']}>
		<Text size='md' align='center' className={styles['header-mobile__title']}>{title}</Text>
		<div className={styles['header-mobile__addition']}>
			{children}
		</div>
	</div>
)

HeaderMobile.propTypes = {
	title: PropTypes.string.isRequired
}

export default HeaderMobile
