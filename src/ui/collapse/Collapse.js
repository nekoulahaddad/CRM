import Panel from './Panel'

export default function Collapse({ children, ...rest }) {
	return (
		<div {...rest}>
			{children}
		</div>
	)
}

Collapse.Panel = Panel
