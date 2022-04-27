import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './switch.module.sass'

const Switch = ({
	id,
	checked,
	onChange,
	trueLabel,
	falseLabel,
	small,
	disabled,
	onColor,
	offColor,
	width,
	height,
	className,
	style,
	square
}) => {
	const switchClassList = cn(
		styles['toggle-switch'],
		{
			[styles['small-switch']]: small,
			[styles['square-switch']]: square
		},
		className
	)

	const switchStyle = () => {
		if (height && width) {
			return {
				height,
				width,
				...style
			}
		}

		return style
	}

	const labelStyle = () => {
		return {
			borderRadius: !square && height && height / 2,
			background:
				(checked && onColor && onColor) ||
				(!checked && offColor && offColor)
		}
	}

	const toggleStyle = () => {
		if (width && height) {
			return {
				width: !square ? (height - 4) : (height - 2),
				height: !square ? (height - 4) : (height - 2),
				borderRadius: !square && height - 4,
				right: !checked && width - height
			}
		}
	}

	return (
		<div className={switchClassList} style={switchStyle()}>
			{onChange ? (
				<input
					id={id}
					name={id}
					type='checkbox'
					className={styles['toggle-switch-checkbox']}
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
					disabled={disabled}
				/>
			) : (
				<input
					id={id}
					name={id}
					type='checkbox'
					className={styles['toggle-switch-checkbox']}
					checked={checked}
					readOnly
				/>
			)}

			{id && (
				<label
					htmlFor={id}
					className={styles['toggle-switch-label']}
					style={labelStyle()}
				>
					<span
						className={cn(styles.inner, { [styles['toggle-switch-disabled']]: disabled })}
						style={{
							fontSize: height && height / 3,
							padding: height && height / 4
						}}
						data-yes={trueLabel}
						data-no={falseLabel}
					/>
					<span
						className={cn(styles.switch, { [styles['toggle-switch-disabled']]: disabled })}
						style={toggleStyle()}
					/>
				</label>
			)}
		</div>
	)
}

Switch.defaultProps = {
	checked: false,
	optionLabels: [],
	small: false,
	disabled: false,
	square: false
}

Switch.propTypes = {
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func,
	onColor: PropTypes.string,
	offColor: PropTypes.string,
	trueLabel: PropTypes.string,
	falseLabel: PropTypes.string,
	small: PropTypes.bool,
	disabled: PropTypes.bool,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.shape({}),
	square: PropTypes.bool
}

export default Switch
