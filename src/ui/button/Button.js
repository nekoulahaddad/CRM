import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ActiveLink from 'components/utils/ActiveLink'
import styles from './button.module.sass'

const Button = ({
	children,
	as,
	size,
	view,
	className = '',
	fluid,
	disabled,
	type,
	onClick,
	style,
	to,
	color,
	...props
}) => {
	const classNames = cn(
		styles.button,
		styles[view],
		styles[size],
		{
			[styles.isFluid]: fluid,
			[styles['color-' + color]]: color
		},
		className
	)

	return as === 'link' ? (
		<ActiveLink
			to={to}
			style={style}
			className={classNames}
			disabled={disabled}
			activeClassName={styles.active}
		>
			{children}
		</ActiveLink>
	) : (
		<button
			style={style}
			className={classNames}
			type={type}
			disabled={disabled}
			onClick={!disabled ? onClick : () => {}}
			{...props}
		>
			{children}
		</button>
	)
}

Button.defaultProps = {
	as: 'button',
	size: 'lg',
	view: 'primary',
	fluid: false,
	disabled: false,
	type: 'button'
}

Button.propTypes = {
	as: PropTypes.string,
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	view: PropTypes.oneOf(['primary', 'secondary', 'header-nav']),
	className: PropTypes.string,
	fluid: PropTypes.bool,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func,
	to: PropTypes.string,
	color: PropTypes.string
}

export default Button
