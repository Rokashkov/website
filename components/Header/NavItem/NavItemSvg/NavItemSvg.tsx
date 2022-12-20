import styles from './NavItemSvg.module.sass'

interface NavItemSvgProps {
	children?: string | JSX.Element
	href: string
}

export default function NavItemSvg (props: NavItemSvgProps) {
	const { children, href } = props

	return (
		<a
			className={ styles.wrapper }
			href={ href }
			target="_blank"
			rel="noreferrer"
		>
			{ children }
		</a>
	)
}