import { forwardRef, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import cn from 'classnames'
import useOverlay from 'hooks/useOverlay'
import useOverflow from 'hooks/useOverflow'
import SearchFormSection from './SearchFormSection'
import SearchFormGroup from './SearchFormGroup'
import SearchFormGroupItem from './SearchFormGroupItem'
import { Button, Input, Screen, Text } from 'components/ui'
import styles from './search-form.module.sass'

const SearchForm = forwardRef(({
	placeholder,
	className,
	inputName,
	overlay,
	searchButton,
	searchPrefix
}, ref) => {
	const { t } = useTranslation(['common'])
	const { handlerOverlay } = overlay && useOverlay()
	const { handlerOverflow } = useOverflow()
	const searchFormWrapRef = useRef(ref || null)
	const searchResultRef = useRef(null)
	const mobileInputRef = useRef(null)

	const classNames = cn(
		styles['search-form-wrapper'],
		className
	)

	const onClickOutsideResult = (e) => {
		const element = e.target

		if (searchFormWrapRef.current && !searchFormWrapRef.current.contains(element)) {
			e.preventDefault()
			e.stopPropagation()
			searchFormWrapRef.current.classList.remove(styles.active)
			overlay && handlerOverlay(false)
			document.body.removeEventListener('click', onClickOutsideResult)
		}
	}

	// const handleSearchClose = () => {
	// 	searchFormWrapRef.current.classList.remove(styles.active)
	//
	// 	if (mobileInputRef.current) {
	// 		handlerOverflow(false)
	// 	}
	// }

	const handleSearchFocus = () => {
		document.body.addEventListener('click', onClickOutsideResult)
		searchFormWrapRef.current.classList.add(styles.active)
		overlay && handlerOverlay(true)

		if (mobileInputRef.current) {
			mobileInputRef.current.focus()
			handlerOverflow(true)
		}
	}

	const onKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			//add methods after connect to db
		}
	}

	const ResultItem = () => {
		//delete after connect to db
		const resultItems = ['option1', 'option2', 'option3']

		return resultItems.map((result, i) => (
			<div key={i} className={styles['search-result__item']}>
				<Text>{result}</Text>
			</div>
		))

	}

	return (
		<div className={classNames} ref={searchFormWrapRef}>
			<div className={styles['search-form']}>
				<Input.Group>
					<Input
						id={inputName ? inputName : 'search'}
						name={inputName ? inputName : 'search'}
						placeholder={placeholder}
						type='search'
						prefix={searchPrefix ? 'search' : ''}
						heightSize='sm'
						onFocus={handleSearchFocus}
						onKeyDown={onKeyDown}
						fluid={true}
					/>
					{searchButton && (
						<Screen size='xl'>
							<Input.GroupItem>
								<Button size='sm'>{t('buttons.search')}</Button>
							</Input.GroupItem>
						</Screen>
					)}
				</Input.Group>
			</div>

			<div className={styles['search-result-wrapper']}>
				{/*complete after do responsible layout*/}
				{/*<Screen size='sm' down>*/}
				{/*	<div className={styles.searchResultHeader}>*/}
				{/*		<Input*/}
				{/*			fluid*/}
				{/*			id='searchFormMobile'*/}
				{/*			suffix='search'*/}
				{/*			name='search'*/}
				{/*			placeholder='Поиск товаров по каталогу, наименованию и артикулу...'*/}
				{/*			type='search'*/}
				{/*			ref={mobileInputRef}*/}
				{/*			tabIndex={-1}*/}
				{/*		/>*/}
				{/*		<Button*/}
				{/*			style={{ marginLeft: 12 }}*/}
				{/*			view='plain'*/}
				{/*			onClick={handleSearchClose}*/}
				{/*			icon='close'*/}
				{/*		/>*/}
				{/*	</div>*/}
				{/*</Screen>*/}
				<div className={styles['search-result']} ref={searchResultRef}>
					<ResultItem />
				</div>
			</div>
		</div>
	)
})

SearchForm.Section = SearchFormSection
SearchForm.Group = SearchFormGroup
SearchForm.GroupItem = SearchFormGroupItem

SearchForm.defaultProps = {
	placeholder: 'Поиск...',
	overlay: true,
	searchButton: true,
	searchPrefix: true
}

SearchForm.propsTypes = {
	placeholder: PropTypes.string,
	className: PropTypes.string,
	overlay: PropTypes.bool,
	searchButton: PropTypes.bool,
	searchPrefix: PropTypes.bool
}

export default SearchForm
