import styles from './ShortcutBoardItem.module.sass'

interface ShortcutBoardItem {
	children?: JSX.Element
	title?: string
	href?: string
}

export default function ShortcutBoardItem (props: ShortcutBoardItem) {
	const { children, title, href } = props

	return (
		<a
			title={ title }
			className={ styles.wrapper }
			href={ href }
		>
			{ children }
		</a>
	)
}