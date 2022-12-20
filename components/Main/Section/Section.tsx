import styles from './Section.module.sass'

interface SectionProps {
	children?: JSX.Element | JSX.Element[]
}

export default function Section (props: SectionProps) {
	const { children } = props

	return (
		<section className={ styles.section }>
			<div className={ styles.content }>
				{ children }
			</div>
		</section>
	)
}