import PropTypes from 'prop-types'
import PageDescriptionSection from './PageDescriptionSection'
import { Text } from 'components/ui'

const PageDescription = ({
	title,
	description,
	descriptionStyle
}) => {
	const descStyles = {
		...descriptionStyle
	}

	return (
		<div className='page-description'>
			<Text as='h2'>{title}</Text>
			<Text as='p' className='offset-top-10' style={descStyles} color='gray'>{description}</Text>
		</div>
	)
}

PageDescription.Section = PageDescriptionSection

PageDescription.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	descriptionStyle: PropTypes.shape({})
}

export default PageDescription
