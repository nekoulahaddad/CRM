import { useRef, useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import FormLabel from './FormLabel'
import FormError from './FormError'
import Prefix from './Prefix'
import Suffix from './Suffix'
import InputGroup from './InputGroup'
import InputGroupItem from './InputGroupItem'
import { Icon } from 'components/ui'
import styles from './form.module.sass'

const Input = forwardRef((
	{
		id,
		name,
		register,
		rules,
		label,
		labelSize,
		labelColor,
		labelClassName,
		className = '',
		type,
		onChange,
		errors,
		defaultValue,
		defaultChecked,
		value,
		placeholder,
		prefix,
		suffix,
		withTogglePassword,
		disabled,
		fluid,
		heightSize,
		size,
		checkboxView,
		required,
		...rest
	}, ref) => {
	const excludeTypes = ['checkbox', 'radio', 'file', 'color', 'range', 'hidden']
	const inputRef = useRef(null)
	const [inputType, setInputType] = useState(type)
	const validations = register
		? { ...register(name, { required, ...rules, onChange: e => onChange ? onChange(e.target.value) : null }) }
		: null

	const formInputWrapperClassList = cn(
		styles['form-input-wrapper'],
		styles[type],
		{
			[styles.error]: errors && errors[name],
			[styles.isFluid]: fluid
		}
	)

	const inputClassList = cn(
		styles.input,
		{
			[styles[heightSize]]: heightSize,
			[styles.password]: withTogglePassword,
			[styles.hasPrefix]: prefix,
			[styles.hasSuffix]: suffix,
			[styles['size-' + size]]: size
		},
		className
	)

	const labelClassList = cn(
		labelClassName,
		{
			[styles['color-' + labelColor]]: labelColor
		}
	)

	const checkmarkClassList = cn(
		styles.checkmark,
		{
			[styles['checkbox-' + checkboxView]]: checkboxView
		}
	)

	const TogglePassword = () => {
		const togglePasswordHandler = () => {
			if (inputType === 'text') {
				setInputType('password')
			} else {
				setInputType('text')
			}
		}

		return (
			<>
				{withTogglePassword && (
					<span className={styles['toggle-password']} onClick={togglePasswordHandler}>
						<Icon name='eye' size='md' turnOff={inputType === 'password'} />
					</span>
				)}
			</>
		)
	}

	return (
		<label
			ref={ref}
			htmlFor={id}
			className={formInputWrapperClassList}
		>
			<FormLabel label={label} className={labelClassList} labelSize={labelSize} />
			<div className={styles['input-container']} ref={inputRef}>
				<input
					id={id}
					name={name}
					className={inputClassList}
					type={inputType}
					placeholder={placeholder}
					defaultValue={defaultValue}
					defaultChecked={defaultChecked}
					value={value}
					onChange={onChange}
					autoComplete={inputType === 'password' || inputType === 'search' ? 'off' : null}
					disabled={disabled}
					{...validations}
					{...rest}
				/>
				{!excludeTypes.includes(type) && <Prefix icon={prefix} />}
				{(suffix || withTogglePassword) && !excludeTypes.includes(type) && (
					<Suffix suffix={suffix}>
						<TogglePassword />
					</Suffix>
				)}
				{(type === 'checkbox' || type === 'radio') && (
					<span className={checkmarkClassList} />
				)}
			</div>
			<FormError message={errors?.[name]?.message} />
		</label>
	)
})

Input.Group = InputGroup
Input.GroupItem = InputGroupItem

Input.defaultProps = {
	type: 'text',
	labelSize: 'lg'
}

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	register: PropTypes.func,
	rules: PropTypes.shape({}),
	label: PropTypes.string,
	labelSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	labelColor: PropTypes.oneOf(['primary', 'blue']),
	labelClassName: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.oneOf([
		'button',
		'checkbox',
		'color',
		'date',
		'datetime-local',
		'email',
		'file',
		'hidden',
		'image',
		'month',
		'number',
		'password',
		'radio',
		'range',
		'reset',
		'search',
		'submit',
		'tel',
		'text',
		'time',
		'url',
		'week'
	]),
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.object
	]),
	defaultChecked: PropTypes.bool,
	value: PropTypes.any,
	placeholder: PropTypes.string,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	errors: PropTypes.object,
	withTogglePassword: PropTypes.bool,
	heightSize: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
	size: PropTypes.oneOf(['md', 'sm']),
	checkboxView: PropTypes.oneOf(['secondary']),
	fluid: PropTypes.bool
}

export default Input
