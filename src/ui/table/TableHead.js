import Tr from './Tr'
import styles from './table.module.sass'

const TableHead = ({ children }) => (
	<div className={styles.thead}>
		<Tr>
			{children}
		</Tr>
	</div>
)

export default TableHead
