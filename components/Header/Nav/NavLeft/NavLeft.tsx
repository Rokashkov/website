import styles from './NavLeft.module.sass'

interface NavLeftProps {
	children?: JSX.Element | JSX.Element[]
}

export default function NavLeft (props: NavLeftProps) {
	const { children } = props

	return (
		<nav className={ styles.nav }>{ children }</nav>
	)
}