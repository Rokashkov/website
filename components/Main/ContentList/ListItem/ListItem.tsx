import styles from './ListItem.module.sass'

interface ListItemProps {
	children?: string
	href?: string
}

export default function ListItem (props: ListItemProps) {
	const { children, href } = props

	return (
		<div 
			className={ styles.item }
			onClick={ () => {
				window.location.href = href
			} }
		>
			<a
				href={ href }
				className={ styles.text }
			>
				{ children }
			</a>
			<div className={ styles.arrow }>
				<div className={ styles.point + ' ' + styles.top }/>
				<div className={ styles.point + ' ' + styles.bot }/>
			</div>
		</div>
		
	)
}