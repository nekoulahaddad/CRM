import PropTypes from 'prop-types'
import { Text } from 'components/ui'
import styles from './form.module.sass'

const FormError = ({ message }) => {
	return (
		<>
			{message && (
				<Text as='p' color='danger' className={styles.errorMsg} style={{ fontSize: '11px', lineHeight: '14px' }}>
					{message}
				</Text>
			)}
		</>
	)
}

FormError.propTypes = {
	message: PropTypes.string
}

export default FormError
