import React from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { Text } from 'components/ui'
import styles from './custom-recharts.module.sass'

export default function CustomTooltip({ payload, label, active }) {
	const { t } = useTranslation(['common'])
	const currentDate = moment().format('DD.MM.YYYY')
	const currentMonth = moment().month()
	const splitDate = currentDate.split('.')

	if (active) {
		return (
			<div className={styles['custom-tooltip']}>
				<Text color='gray' style={{ fontSize: 8 }}>
					{label}.{splitDate[1]}.{splitDate[2]}
				</Text>
				<Text as='p' style={{ fontSize: 18, marginBottom: 5 }}>
					{payload[0].value} {t('words.pc')}.
				</Text>
				<Text as='p' size='xs' color='gray'>{t('months.' + currentMonth)}</Text>
			</div>
		)
	}

	return null
}
