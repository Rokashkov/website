import Layout from "../components/Layout/Layout"
import Card from "../components/Main/Card/Card"
import CardBoard from "../components/Main/CardBoard/CardBoard"
import Section from "../components/Main/Section/Section"

export default function Index () {
	
	return (
		<Layout>
			<Section>
				<h1>Welcome</h1>
				<h2>to</h2>
				<h1>My Personal Website</h1>
			</Section>
			<Section>
				<h1>There</h1>
				<h2>You Can Find</h2>
				<CardBoard>
					<Card
						title="About"
						linkText="Meet"
						href="/about"
					>
						To introduce myself, I have a whole page about me, my skills and my bio
					</Card>
					<Card
						title="My Projects"
						linkText="Check"
						href="/projects"
					>
						Check my projects and a short summary for each of them
					</Card>
					<Card
						title="Gallery"
						linkText="Watch"
						href="/gallery"
					>
						You can watch my personal gallery of some cool solutions and apps
					</Card>
					<Card
						title="My Contacts"
						linkText="Visit"
						href="/contacts"
					>
						If you want to contact me, you probably should visit this page
					</Card>
				</CardBoard>
			</Section>
		</Layout>
	)
}