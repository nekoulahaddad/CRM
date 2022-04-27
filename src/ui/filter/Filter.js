import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import FilterItem from './FilterItem'
import HeaderMobile from './HeaderMobile'
import { Button, Screen, Text } from 'components/ui'
import styles from './filter.module.sass'

const Filter = ({
	children,
	title,
	clear,
	mobile,
	...props
}) => {
	const { t } = useTranslation(['common'])

	return (
		<div className={cn(styles.filter, { [styles.mobile]: mobile })}>
			<Screen size='xl'>
				<Text size='md' color='blue'>{title}</Text>
			</Screen>
			<div className={cn(!mobile && 'offset-top-10')}>
				{React.Children.map(children, child => (
					React.cloneElement(child, ({ mobile, ...props }))
				))}
			</div>
			<Button onClick={clear} fluid={true} className={mobile ? 'offset-top-20' : 'offset-top-10'}>
				{t('buttons.reset')}
			</Button>
		</div>
	)
}

Filter.Item = FilterItem
Filter.HeaderMobile = HeaderMobile

Filter.defaultProps = {
	mobile: false
}

Filter.propTypes = {
	title: PropTypes.string,
	clear: PropTypes.func,
	mobile: PropTypes.bool
}

export default Filter
