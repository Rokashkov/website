import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Section from '../components/Main/Section/Section'

interface ErrorProps {
	statusCode: number
}

function Error (props: ErrorProps) {
	const { statusCode } = props
	
	return (
		<>
			<Head>
				<title>Error :(</title>
			</Head>
			<Layout>
				<Section>
					<p>
						{ statusCode
							? `An error ${statusCode} occurred on server`
							: 'An error occurred on client' }
					</p>
				</Section>
			</Layout>
		</>

	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}
  
export default Error