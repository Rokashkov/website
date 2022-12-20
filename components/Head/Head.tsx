import NextHead from 'next/head'

interface HeadProps {
	title?: string
}

export default function Head (props: HeadProps) {
	const { title } = props
	const DEFAULT_TITLE = process.env.NEXT_PUBLIC_DEFAULT_TITLE
	
	return (
		<NextHead>
			<title>{ title ? title : DEFAULT_TITLE }</title>
		</NextHead>
	)
}