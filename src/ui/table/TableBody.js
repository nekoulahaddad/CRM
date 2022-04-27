import styles from './table.module.sass'

const TableBody = ({ children }) => (
	<div className={styles.tbody}>
		{children}
	</div>
)

export default TableBody
