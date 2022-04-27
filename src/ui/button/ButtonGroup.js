import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './button.module.sass'

const ButtonGroup = ({
	children,
	className,
	justifyContent,
	column,
	style
}) => {
	const classList = cn(
		styles['button-group'],
		{
			['justify-content-' + justifyContent]: justifyContent,
			[styles.column]: column
		},
		className
	)

	return (
		<div style={style} className={classList}>
			{children}
		</div>
	)
}

ButtonGroup.propTypes = {
	className: PropTypes.string,
	style: PropTypes.shape({}),
	justifyContent: PropTypes.oneOf(['center', 'start', 'end']),
	column: PropTypes.bool
}

export default ButtonGroup
