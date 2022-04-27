import PropTypes from 'prop-types'
import BaseModal from 'react-modal'
import Icon from '../icon/Icon'
import styles from './modal.module.sass'

const Modal = ({
	children,
	isOpen,
	onAfterOpen,
	onAfterClose,
	onRequestClose,
	closeTimeoutMS,
	contentLabel,
	shouldCloseOnOverlayClick,
	parentSelector,
	size,
	...rest
}) => {
	const classList = `${styles.modal} ${size ? styles[size] : ''}`

	let inlineStyle
	if (!isOpen && closeTimeoutMS) {
		inlineStyle = {
			overlay: {
				transition: `opacity ${closeTimeoutMS}ms ease-in-out`
			}
		}
	}

	return (
		<BaseModal
			ariaHideApp={false}
			parentSelector={parentSelector}
			bodyOpenClassName={styles.modalBodyOpen}
			portalClassName={styles.modalPortal}
			isOpen={isOpen}
			onAfterOpen={onAfterOpen}
			onAfterClose={onAfterClose}
			onRequestClose={onRequestClose}
			contentLabel={contentLabel}
			closeTimeoutMS={closeTimeoutMS}
			className={classList}
			shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
			overlayClassName={styles['modal-overlay']}
			style={inlineStyle}
			{...rest}
		>
			<button className={styles.close} onClick={onRequestClose}>
				<Icon size='md' name='close' hoverColor='gray' />
			</button>
			{children}
		</BaseModal>
	)
}
Modal.defaultProps = {
	closeTimeoutMS: 200,
	isOpen: false,
	shouldCloseOnOverlayClick: true,
	shouldCloseOnEsc: true
}

Modal.propTypes = {
	size: PropTypes.oneOf(['', 'full', 'lg', 'md', 'sm']),
	onAfterOpen: PropTypes.func,
	onAfterClose: PropTypes.func,
	onRequestClose: PropTypes.func,
	closeTimeoutMS: PropTypes.number,
	isOpen: PropTypes.bool.isRequired,
	contentLabel: PropTypes.string,
	shouldCloseOnOverlayClick: PropTypes.bool,
	shouldCloseOnEsc: PropTypes.bool,
	parentSelector: PropTypes.elementType
}

export default Modal
