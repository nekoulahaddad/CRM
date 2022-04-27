import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './icon.module.sass'

const Icon = ({
	children,
	className = '',
	name,
	size,
	color,
	style,
	title,
	hoverColor,
	turnOff,
	cursorPointer,
	customTitle,
	placementCustomTitle,
	wrapperClassName,
	...props
}) => {
	const [isHover, setIsHover] = useState(false)

	const wrapperClassNames = cn(
		styles['icon-wrapper'],
		{ [styles['position-relative']]: customTitle },
		wrapperClassName
	)

	const classNames = cn(
		'icon-' + name,
		{
			[styles[color]]: color,
			[styles[size]]: size,
			[styles.hover]: hoverColor,
			[styles['hover-' + hoverColor]]: hoverColor,
			[styles['turn-off']]: turnOff,
			[styles.pointer]: cursorPointer
		},
		className
	)

	const customTitleClassNames = cn(
		styles['custom-title'],
		{
			[styles['custom-title-' + placementCustomTitle]]: placementCustomTitle
		}
	)

	if (!name) return null

	return (
		<div className={wrapperClassNames}>
			<i
				className={classNames}
				style={style}
				title={!customTitle ? title : ''}
				onMouseEnter={() => customTitle ? setIsHover(true) : {}}
				onMouseLeave={() => customTitle ? setIsHover(false) : {}}
				{...props}
			>
				{children && <span className={styles.icon_text}>{children}</span>}
			</i>
			{customTitle && title && isHover && (
				<div
					className={customTitleClassNames}
					data-title={title}
				/>
			)}
		</div>
	)
}

Icon.defaultProps = {
	color: 'primary',
	customTitle: false,
	placementCustomTitle: 'left'
}

Icon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
	color: PropTypes.oneOf([
		'primary',
		'white',
		'peach',
		'gray',
		'gray-light',
		'green',
		'red',
		'blue',
		'blue-deep'
	]),
	title: PropTypes.string,
	style: PropTypes.object,
	hoverColor: PropTypes.oneOf(['gray']),
	turnOff: PropTypes.bool,
	cursorPointer: PropTypes.bool,
	customTitle: PropTypes.bool,
	placementCustomTitle: PropTypes.string,
	wrapperClassName: PropTypes.string
}

export default Icon
