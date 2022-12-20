import { CSSProperties } from 'react'
import styles from './CardBoard.module.sass'

interface CardProps {
	children?: JSX.Element | JSX.Element[]
	style?:  CSSProperties
}

export default function CardBoard (props: CardProps) {
	const { children, style } = props

	return (
		<div
			className={ styles.wrapper }
			style={ style }
		>
			{ children }
		</div>
	)
}