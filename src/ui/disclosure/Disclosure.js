import React, { useRef, useState } from 'react'
import cn from 'classnames'
import { Icon } from 'components/ui'
import styles from './disclosure.module.sass'

const Disclosure = ({ children }) => {
	const [active, setActive] = useState(false)
	const disclosureRef = useRef(null)

	const onClickOutsideResult = (e) => {
		const element = e.target

		if (disclosureRef.current && !disclosureRef.current.contains(element)) {
			e.stopPropagation()
			setActive(false)
			document.body.removeEventListener('click', onClickOutsideResult)
		}
	}

	const handleSearchFocus = () => {
		setActive(!active)
		document.body.addEventListener('click', onClickOutsideResult)
	}

	return (
		<div ref={disclosureRef} className={styles.disclosure}>
			<Icon
				name='ellipsis'
				size='md'
				onClick={handleSearchFocus}
			/>

			<div className={cn(styles['disclosure-menu'], { [styles.active]: active })}>
				{active && children}
			</div>
		</div>
	)
}

export default Disclosure
