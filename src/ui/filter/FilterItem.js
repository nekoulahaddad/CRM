import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Select } from 'components/ui'
import styles from './filter.module.sass'
import Text from '../text/Text'

const FilterItem = ({
	name,
	value,
	options,
	onChange,
	fluid,
	translationPage,
	mobile
}) => {
	const { t } = useTranslation([translationPage])
	const defaultOptions = !options
	const time = ['all', 'month', 'week', 'day']
	//delete after connect to db
	const regions = ['all', 'moscow', 'minsk', 'kiev']

	if (!options) {
		switch (name) {
			case 'time':
				options = time
				break
			case 'region':
				options = regions
				break
			default:
				options = []
		}
	}

	return (
		<div className={styles['filter-item']}>
			{mobile && (
				<Text size='sm'>{t('filters.mobile.' + name)}</Text>
			)}
			<Select
				value={value}
				onChange={value => onChange(value, name)}
				style={{ fontSize: mobile ? 12 : 16 }}
				fluid={fluid}
			>
				{options?.map(option => (
					<Select.Option key={option} value={option}>
						{/*repeat it after connect to db*/}
						{t(`filters.${name}.${option}`)}
						{/*{defaultOptions ? t(`filters.${name}.${option}`) : option}*/}
					</Select.Option>
				))}
			</Select>
		</div>
	)
}

FilterItem.defaultProps = {
	fluid: true,
	mobile: false
}

FilterItem.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	options: PropTypes.array,
	onChange: PropTypes.func.isRequired,
	fluid: PropTypes.bool,
	translationPage: PropTypes.string,
	mobile: PropTypes.bool
}

export default React.memo(FilterItem)
