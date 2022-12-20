import Layout from "../components/Layout/Layout"
import Card from "../components/Main/Card/Card"
import CardBoard from "../components/Main/CardBoard/CardBoard"
import Section from "../components/Main/Section/Section"
import Gallery from "../components/Svg/Gallery"
import Gear from "../components/Svg/Gear"
import Telegram from "../components/Svg/Telegram"
import User from "../components/Svg/User"

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
						icon={ <User/> }
						title="About"
						linkText="Meet"
						href="/about"
					>
						To introduce myself, I have a whole page about me, my skills and my bio
					</Card>
					<Card
						icon={ <Gear/> }
						title="My Projects"
						linkText="Check"
						href="/projects"
					>
						Check my projects and a short summary for each of them
					</Card>
					<Card
						icon={ <Gallery/> }
						title="Gallery"
						linkText="Watch"
						href="/gallery"
					>
						You can watch my personal gallery of some cool solutions and apps
					</Card>
					<Card
						icon={ <Telegram/> }
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