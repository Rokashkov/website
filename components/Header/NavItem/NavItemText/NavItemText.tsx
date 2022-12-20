import { useEffect, useState } from 'react'
import styles from './NavItemText.module.sass'

interface NavItemTextProps {
	children?: string
	href: string
}

export default function NavItemText (props: NavItemTextProps) {
	const { children, href } = props
	const [pathname, setPathname] = useState(undefined)
	const isActive = href === pathname

	useEffect(() => {
		setPathname(window.location.pathname)
	}, [])

	return (
		<a
			className={ styles.wrapper + (isActive ? ' ' + styles.active : '') }
			href={ href }
		>
			{ children }
		</a>
	)
}