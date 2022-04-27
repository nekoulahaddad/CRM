import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './text.module.sass'

const Text = ({
	as: ElementType = 'span',
	size,
	color,
	align,
	weight,
	overflow,
	transform,
	decoration,
	className = '',
	style,
	required,
	children,
	...props
}) => {
	const classList = cn(
		{
			[styles['text-' + size]]: size,
			[styles['color-' + color]]: color,
			[styles['text-' + align]]: align,
			[styles['text-' + weight]]: weight,
			[styles['text-overflow-' + overflow]]: overflow,
			[styles['text-transform-' + transform]]: transform,
			[styles['text-decoration-' + decoration]]: decoration,
			[styles.required]: required
		},
		className
	)

	return (
		<ElementType
			style={style}
			className={classList || null}
			{...props}
		>
			{children}
		</ElementType>
	)
}

Text.defaultProps = {
	as: 'span'
}

Text.propTypes = {
	as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'i', 'small', 'strong', 'li']),
	size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
	color: PropTypes.oneOf([
		'primary',
		'gray',
		'danger',
		'blue',
		'green',
		'red',
		'peach',
		'white',
		'black',
		'blue-deep'
	]),
	align: PropTypes.oneOf(['start', 'end', 'center', 'justify']),
	weight: PropTypes.oneOf(['bold', 'light', 'medium', 'regular']),
	overflow: PropTypes.oneOf(['fade', 'ellipsis']),
	transform: PropTypes.oneOf(['lowercase', 'uppercase']),
	decoration: PropTypes.oneOf(['underline', 'line-through']),
	className: PropTypes.string,
	style: PropTypes.shape({}),
	required: PropTypes.bool
}

export default Text
