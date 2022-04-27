import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './local-switcher.module.sass'

export default function LocaleSwitcher() {
	const { i18n } = useTranslation()

	const changeLanguage = locale => {
		i18n.changeLanguage(locale)
		localStorage.setItem('locale', locale)
	}

	const handlerLanguage = (checked) => {
		checked
			? changeLanguage('en')
			: changeLanguage('ru')
	}

	return (
		<div className={styles['locale-switcher']}>
			<input
				type='checkbox'
				className={styles['checkbox']}
				onChange={e => handlerLanguage(e.target.checked)}
				checked={i18n.language === 'en'}
			/>
			<div className={styles['locale-switcher__button']} />
		</div>
	)
}
