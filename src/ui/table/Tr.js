import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './table.module.sass'

const Tr = ({
	children,
	className = '',
	weight,
	...rest
}) => {
	const classNames = cn(
		styles.tr,
		{
			[styles['text-' + weight]]: weight
		},
		className
	)

	return (
		<div
			className={classNames || null}
			{...rest}
		>
			{children}
		</div>
	)
}


Tr.propTypes = {
	className: PropTypes.string,
	weight: PropTypes.oneOf(['bold', 'light', 'medium', 'regular'])
}

export default Tr
