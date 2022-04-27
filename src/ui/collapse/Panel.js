import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import cn from 'classnames'
import useDebounce from 'hooks/useDebounce'
import useWindowSize from 'hooks/useWindowSize'
import { Icon, Text } from 'components/ui'
import styles from './collapse.module.sass'

const Panel = ({
	children,
	label,
	defaultActiveTab,
	index,
	disabled,
	options,
	isArrowMoving,
	icon
}) => {
	const { width } = useWindowSize()
	const debouncedWidth = useDebounce(width, 500)
	const [height, setHeight] = useState(0)
	const [activeTab, setActiveTab] = useState(defaultActiveTab)
	const isActive = activeTab === index
	const panelRef = useRef(null)
	const contentRef = useRef(null)
	const { t } = useTranslation(['common'])

	useEffect(() => {
		const height = contentRef.current.lastChild.clientHeight
		setHeight(height)
	}, [isActive, debouncedWidth])

	const panelClassList = cn(
		styles.panel,
		{
			[styles.active]: isActive,
			[styles['arrow-moving']]: isArrowMoving
		}
	)

	const innerStyle = {
		height: `${isActive ? height : 0}px`
	}

	const activateTab = tab => setActiveTab(activeTab === tab ? -1 : tab)

	return (
		<div
			ref={panelRef}
			className={panelClassList}
		>
			<button
				className={styles.panel__label}
				onClick={() => activateTab(index)}
				disabled={disabled}
			>
				<Text overflow='ellipsis'>{label}</Text>
				<div className={styles.panel__options}>
					<div
						className={styles['panel__additing-options']}
						onClick={(e) => e.stopPropagation()}
					>
						{options}
					</div>
					<Icon
						className={styles.arrow}
						name={icon || (isArrowMoving ? 'arrow-up' : 'arrow-down')}
						size='md'
						title={t('buttonDesc.view', { value: '' })}
					/>
				</div>
			</button>

			<div
				ref={contentRef}
				className={styles.panel__inner}
				style={innerStyle}
			>
				<div className={styles.panel__content}>{children}</div>
			</div>
		</div>
	)
}

Panel.defaultProps = {
	isArrowMoving: true,
	icon: ''
}

Panel.propTypes = {
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]).isRequired,
	defaultActiveTab: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	index: PropTypes.number.isRequired,
	disabled: PropTypes.bool,
	options: PropTypes.shape({}),
	isArrowMoving: PropTypes.bool,
	icon: PropTypes.string
}

export default Panel
