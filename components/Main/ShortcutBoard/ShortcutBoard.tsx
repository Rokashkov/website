import styles from './ShortcutBoard.module.sass'

interface ShortcutBoard {
	children?: JSX.Element | JSX.Element[]
}

export default function ShortcutBoard (props: ShortcutBoard) {
	const { children } = props
	return (
		<div className={ styles.wrapper }>{ children }</div>
	)
}