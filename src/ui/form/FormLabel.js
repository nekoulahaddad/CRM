import PropTypes from 'prop-types'
import cn from 'classnames'
import { Text } from 'components/ui'
import styles from './form.module.sass'

const FormLabel = ({ label, labelSize, className }) => {
	const classNames = cn(
		styles.label,
		className
	)

	return (
		<>
			{label && (
				<Text size={labelSize} weight='bold' className={classNames}>
					{label}
				</Text>
			)}
		</>
	)
}

FormLabel.defaultProps = {
	labelSize: 'lg'
}

FormLabel.propTypes = {
	label: PropTypes.string,
	labelSize: PropTypes.oneOf(['sm', 'md', 'lg'])
}

export default FormLabel
