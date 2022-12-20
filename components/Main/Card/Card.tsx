import styles from './Card.module.sass'

interface CardProps {
	children?: string | JSX.Element | JSX.Element[]
	title?: string
	linkText?: string
	href?: string
	icon?: JSX.Element
}

export default function Card (props: CardProps) {
	const { children, title, linkText, href, icon } = props

	return (
		<div
			className={ styles.wrapper }
			onClick={ () => {
				window.location.href = href
			} }
		>
			<div className={ styles.icon }>{ icon }</div>
			<div className={ styles.title }>{ title }</div>
			<div className={ styles.description }>{ children }</div>
			<a
				className={ styles.button }
				href={ href }
			>
				{ linkText }
			</a>
		</div>
	)
}