import PropTypes from 'prop-types'
import cn from 'classnames'

const SearchFormSection = ({ children, sectionFirst }) => {
	const classList = cn(
		'section',
		{
			['section-first']: sectionFirst
		}
	)

	return (
		<section className={classList}>
			<div className='container'>
				{children}
			</div>
		</section>
	)
}

SearchFormSection.propsTypes = {
	sectionFirst: PropTypes.bool
}

export default SearchFormSection
