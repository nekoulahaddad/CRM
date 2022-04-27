import PropTypes from 'prop-types'
import cn from 'classnames'
import TableHead from './TableHead'
import TableBody from './TableBody'
import styles from './table.module.sass'

const Table = ({
	children,
	className = '',
	style
}) => {
	const classNames = cn(
		styles.table,
		className
	)

	return (
		<div className={styles['table-wrapper']}>
			<div
				className={classNames}
				style={style}
			>
				{children}
			</div>
		</div>
	)
}

Table.Head = TableHead
Table.Body = TableBody

Table.propTypes = {
	className: PropTypes.string,
	style: PropTypes.shape({})
}

export default Table
