interface SvgProps {
	children: JSX.Element
	viewBox: string
}

export default function Svg (props: SvgProps) {
	const { children, viewBox,  } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={ viewBox }
		>
			{ children }
		</svg>
	)
}