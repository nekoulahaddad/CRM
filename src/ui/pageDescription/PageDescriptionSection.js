import PropTypes from 'prop-types'
import cn from 'classnames'

const PageDescriptionSection = ({ children, sectionFirst }) => {
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

PageDescriptionSection.defaultProps = {
	sectionFirst: true
}

PageDescriptionSection.propsTypes = {
	sectionFirst: PropTypes.bool
}

export default PageDescriptionSection
