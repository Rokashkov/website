import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Background from '../Svg/Background'
import styles from './Layout.module.sass'

interface LayoutProps {
	children?: JSX.Element | JSX.Element[]
}

export default function Layout (props: LayoutProps) {
	const { children } = props
	
	return (
		<>
			<Header/>
			<Main>{ children }</Main>
			<Footer/>
			<Background className={ styles.background }/>
		</>
	)
}