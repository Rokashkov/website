import styles from './Section.module.sass'

interface SectionProps {
	children?: JSX.Element | JSX.Element[]
	article?: boolean
	id?: string
}

export default function Section (props: SectionProps) {
	const { children, article, id } = props

	return (
		<section
			id={ id }
			className={ styles.section + (article ? ' ' + styles.article : '') }>
			<div className={ styles.content + (article ? ' ' + styles.article : '') }>
				{ children }
			</div>
		</section>
	)
}