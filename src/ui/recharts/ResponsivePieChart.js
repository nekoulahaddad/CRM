import React from 'react'
import PropTypes from 'prop-types'
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts'

const ResponsivePieChart = ({
	data,
	innerRadius,
	outerRadius,
	cx,
	height,
	style
}) => {
	const colors = ['#EB2316', '#B3DE75']
	const counter = data.reduce((v, i) => v.value + i.value)

	const styles = {
		height,
		...style
	}
	return (
		<div style={styles}>
			<ResponsiveContainer>
				<PieChart>
					<Pie
						data={data}
						cx={cx}
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						dataKey='value'
						// startAngle={90}
						// endAngle={-360}
						animationBegin={0}
						// label
					>
						<>
							<Label
								className={styles['responsive-pie-chart__counter']}
								value={counter}
								position='center'
							/>
							{data.map((entry, i) => (
								<Cell key={`cell-${i}`} fill={colors[i]} />
							))}
						</>
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	)
}

ResponsivePieChart.propsTypes = {
	innerRadius: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	]),
	outerRadius: PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
	]),
	cx: PropTypes.number,
	height: PropTypes.number.isRequired,
	style: PropTypes.shape({})
}

export default ResponsivePieChart
