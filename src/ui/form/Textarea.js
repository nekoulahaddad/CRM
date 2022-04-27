import { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import FormLabel from './FormLabel'
import FormError from './FormError'
import styles from './form.module.sass'

const Textarea = ({
	id,
	name,
	register,
	rules,
	label,
	labelSize,
	labelColor,
	labelClassName,
	className = '',
	onChange,
	errors,
	defaultValue,
	value,
	placeholder,
	disabled,
	fluid,
	heightSize,
	required,
	...rest
}) => {
	const inputRef = useRef(null)
	const validations = register
		? { ...register(name, { required, ...rules, onChange: e => onChange ? onChange(e.target.value) : null }) }
		: null

	const formInputWrapperClassList = cn(
		styles['form-input-wrapper'],
		{
			[styles.error]: errors && errors[name],
			[styles.isFluid]: fluid
		}
	)

	const inputClassList = cn(
		styles.input,
		{
			[styles[heightSize]]: heightSize,
		},
		className
	)

	const labelClassList = cn(
		labelClassName,
		{
			[styles['color-' + labelColor]]: labelColor
		}
	)

	return (
		<label className={formInputWrapperClassList} htmlFor={id}>
			<FormLabel label={label} className={labelClassList} labelSize={labelSize} />
			<div className={styles['input-container']} ref={inputRef}>
				<textarea
					id={id}
					name={name}
					className={inputClassList}
					placeholder={placeholder}
					defaultValue={defaultValue}
					value={value}
					onChange={onChange}
					disabled={disabled}
					{...validations}
					{...rest}
				/>
			</div>
			<FormError message={errors?.[name]?.message} />
		</label>
	)
}

Textarea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	register: PropTypes.func,
	rules: PropTypes.shape({}),
	label: PropTypes.string,
	labelSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	labelColor: PropTypes.oneOf(['primary', 'blue']),
	labelClassName: PropTypes.string,
	className: PropTypes.string,
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object
	]),
	value: PropTypes.any,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	errors: PropTypes.object,
	heightSize: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	fluid: PropTypes.bool
}

export default Textarea
