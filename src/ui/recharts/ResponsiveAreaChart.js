import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import useWindowSize from 'hooks/useWindowSize'
import CustomTooltip from './CustomTooltip'

const ResponsiveAreaChart = ({ data }) => {
	const { size } = useWindowSize()
	const largeSize = size === 'xl' || size === 'xxl'

	return (
		<ResponsiveContainer>
			<AreaChart data={data}>
				<defs>
					<linearGradient id='colorArea' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#78c2dd' />
						<stop offset='95%' stopColor='#48c3ef1f' />
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='day' axisLine={false} tickMargin={largeSize ? 25 : 10} tickSize={0} />
				<YAxis stroke='#CBD5E0' axisLine={false} tickMargin={largeSize ? 25 : 10} tickSize={0} />
				<Tooltip content={<CustomTooltip />} />
				<Area
					type='monotone'
					dataKey='soldItems'
					fillOpacity='0.9'
					stroke='#78C2DD'
					strokeWidth='3'
					fill='url(#colorArea)'
					dot={{ stroke: '#3b90af', fill: 'white', fillOpacity: 1, strokeWidth: 1, r: 4 }}
					activeDot={{ stroke: 'white', fill: '#3b90af', strokeWidth: 2, r: 7 }}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}

export default ResponsiveAreaChart
