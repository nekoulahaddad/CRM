import PropTypes from 'prop-types'
import { Icon } from 'components/ui'
import styles from './form.module.sass'

const Suffix = ({ children, suffix }) => (
	<span className={styles.suffix}>
		{children}
		{suffix && <Icon name={suffix} size='md'/>}
	</span>
)

Suffix.propTypes = {
	children: PropTypes.element,
	suffix: PropTypes.string
}

export default Suffix
