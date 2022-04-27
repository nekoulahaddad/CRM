import React from 'react'
import BaseSelect, { Option, OptGroup } from 'rc-select'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { FormLabel, FormError } from 'components/ui'
import styles from '../form/form.module.sass'

const Select = React.forwardRef(({
	name,
	style,
	fluid,
	errors,
	animation,
	label,
	labelSize,
	labelColor,
	labelClassName,
	...props
}, ref) => {
	if (fluid) {
		style = {
			...style,
			width: '100%'
		}
	}

	const formInputWrapperClassList = cn(
		styles['form-input-wrapper'],
		styles.select,
		{
			[styles.error]: errors && errors[name],
			[styles.isFluid]: fluid
		}
	)

	const labelClassList = cn(
		labelClassName,
		{
			[styles['color-' + labelColor]]: labelColor
		}
	)

	return (
		<label className={formInputWrapperClassList}>
			<FormLabel label={label} className={labelClassList} labelSize={labelSize} />
			<BaseSelect
				ref={ref}
				style={style}
				animation={animation}
				getPopupContainer={trigger => trigger.parentNode}
				dropdownStyle={{ zIndex: 9999 }}
				children={props.children}
				{...props}
			/>
			<FormError message={errors?.[name]?.message} />
		</label>
	)
})

Select.Option = Option
Select.OptGroup = OptGroup

Select.defaultProps = {
	animation: 'slide-up'
}

Select.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	animation: PropTypes.string,
	dropdownClassName: PropTypes.string,
	dropdownStyle: PropTypes.object,
	notFoundContent: PropTypes.elementType,
	open: PropTypes.bool,
	defaultOpen: PropTypes.bool,
	placeholder: PropTypes.string,
	showSearch: PropTypes.bool,
	showArrow: PropTypes.bool,
	allowClear: PropTypes.bool,
	tags: PropTypes.bool,
	tagRender: PropTypes.elementType,
	maxTagTextLength: PropTypes.number,
	maxTagCount: PropTypes.number,
	maxTagPlaceholder: PropTypes.func,
	mode: PropTypes.oneOf(['default', 'combobox', 'multiple', 'tags']),
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	filterOption: PropTypes.bool,
	defaultValue: PropTypes.string,
	value: PropTypes.any,
	style: PropTypes.shape({}),
	onChange: PropTypes.func,
	onSearch: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	onPopupScroll: PropTypes.func,
	onSelect: PropTypes.func,
	onDeselect: PropTypes.func,
	autoFocus: PropTypes.bool,
	inputIcon: PropTypes.elementType,
	clearIcon: PropTypes.elementType,
	removeIcon: PropTypes.elementType,
	menuItemSelectedIcon: PropTypes.elementType,
	virtual: PropTypes.bool,
	errors: PropTypes.shape({}),
	fluid: PropTypes.bool,
	label: PropTypes.string,
	labelSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	labelColor: PropTypes.oneOf(['primary', 'blue']),
	labelClassName: PropTypes.string
}

export default Select
