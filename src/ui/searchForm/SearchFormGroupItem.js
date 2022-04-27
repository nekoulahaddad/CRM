import styles from './search-form.module.sass'

const SearchFormGroupItem = ({ children }) => (
	<div className={styles['search-form-group-item']}>{children}</div>
)

export default SearchFormGroupItem
