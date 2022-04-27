import PropTypes from 'prop-types'
import { Icon } from 'components/ui'
import styles from './form.module.sass'

const Prefix = ({ icon }) => {
	return (
		<>
			{icon && (
				<span className={styles.prefix}>
					<Icon name={icon} size='sm' />
				</span>
			)}
		</>
	)
}

Prefix.propTypes = {
	icon: PropTypes.string
}

export default Prefix
