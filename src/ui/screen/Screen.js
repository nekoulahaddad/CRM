import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { mediaBreakpoints } from 'constants/mediaBreakpoints'

const Screen = ({ children, size, down }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	let screen

	if (down) {
		screen = useMediaQuery({
			maxWidth: mediaBreakpoints[size] - 0.02
		})
	} else {
		screen = useMediaQuery({
			minWidth: mediaBreakpoints[size]
		})
	}

	return mounted && screen ? children : null
}

export default Screen
