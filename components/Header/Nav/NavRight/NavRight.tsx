import styles from './NavRight.module.sass'

interface NavRightProps {
	children?: JSX.Element | JSX.Element[]
}

export default function NavRight (props: NavRightProps) {
	const { children } = props

	return (
		<nav className={ styles.nav }>{ children }</nav>
	)
}