import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './table.module.sass'

const Td = ({
	children,
	buttons,
	className,
	color,
	overflow,
	width,
	style,
	view,
	ellipsis,
	...rest
}) => {
	const tdRef = useRef(null)

	const classNames = cn(
		styles.td,
		{
			[styles.buttons]: buttons,
			[styles[color]]: color,
			[styles.overflow]: overflow,
			[styles.ellipsis]: ellipsis,
			[styles['view-' + view]]: view
		},
		className
	)

	if (width) {
		style = { ...style, minWidth: width, maxWidth: width }
	}

	const onClickOutsideResult = (e) => {
		const element = e.target

		if (tdRef.current && !tdRef.current.contains(element)) {
			tdRef.current.classList.remove(styles.active)
			document.body.removeEventListener('click', onClickOutsideResult)
		}
	}

	const handleZIndexEllipsis = () => {
		document.body.addEventListener('click', onClickOutsideResult)
		tdRef.current.classList.add(styles.active)
	}

	return (
		<div
			ref={tdRef}
			onClick={ellipsis ? handleZIndexEllipsis : null}
			className={classNames || null}
			style={style}
			{...rest}
		>
			{children}
		</div>
	)
}

Td.propTypes = {
	buttons: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.oneOf(['blue', 'green', 'peach', 'red']),
	overflow: PropTypes.bool,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	style: PropTypes.shape({}),
	view: PropTypes.oneOf(['input']),
	ellipsis: PropTypes.bool
}

export default Td
