import styles from './search-form.module.sass'

const SearchFormGroup = ({ children }) => (
	<div className={styles['search-form-group']}>{children}</div>
)

export default SearchFormGroup
