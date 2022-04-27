import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './form.module.sass'

const InputGroup = ({ children, className, align }) => {
	const classNames = cn(
		styles['input-group'],
		`align-items-${align}`,
		className
	)

	return (
		<div className={classNames}>{children}</div>
	)
}

InputGroup.defaultProps = {
	align: 'center'
}

InputGroup.propTypes = {
	className: PropTypes.string,
	align: PropTypes.oneOf(['center', 'start', 'end'])
}

export default InputGroup
