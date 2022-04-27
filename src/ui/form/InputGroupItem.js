import styles from './form.module.sass'

const InputGroupItem = ({ children }) => (
	<div className={styles['input-group-item']}>{children}</div>
)

export default InputGroupItem
