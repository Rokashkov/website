import { useEffect, useState } from 'react'
import GitHub from '../Svg/GitHub'
import Telegram from '../Svg/Telegram'
import styles from './Header.module.sass'
import NavLeft from './Nav/NavLeft/NavLeft'
import NavRight from './Nav/NavRight/NavRight'
import NavItemText from './NavItem/NavItemText/NavItemText'
import NavItemSvg from './NavItem/NavItemSvg/NavItemSvg'

interface HeaderProps {

}

export default function Header (props: HeaderProps) {
	const { NEXT_PUBLIC_GITHUB_URL, NEXT_PUBLIC_TELEGRAM_URL } = process.env
	const [scrollY, setScrollY] = useState(0)
	const [prevScrollY, setPrevScrollY] = useState(0)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		setScrollY(window.scrollY)
		setPrevScrollY(window.scrollY)

		window.addEventListener('scroll', (e) => {
			const window = e.currentTarget as Window
			setScrollY(window.scrollY)
		})
	}, [])

	useEffect(() => {	
		if (prevScrollY < scrollY) {
			setOffset(offset + (scrollY - prevScrollY) > 32 ? 32 : offset + (scrollY - prevScrollY))
		}

		if (prevScrollY > scrollY) {
			setOffset(offset - (prevScrollY - scrollY) < 0 ? 0 : offset - (prevScrollY - scrollY))
		}

		setPrevScrollY(scrollY)
	}, [scrollY])
	return (
		<header
			style={ { top: - offset } } 
			className={ styles.header }
		>
			<div className={ styles.content }>
				<div className={ styles.shadow }/>
				<NavLeft>
					<NavItemText href='/'>Main</NavItemText>
					<NavItemText href='/about'>About</NavItemText>
					<NavItemText href='/projects'>Projects</NavItemText>
					<NavItemText href='/gallery'>Gallery</NavItemText>
					<NavItemText href='/contacts'>Contacts</NavItemText>
				</NavLeft>
				<NavRight>
					<NavItemSvg href={ NEXT_PUBLIC_GITHUB_URL }>
						<GitHub/>
					</NavItemSvg>
					<NavItemSvg href={ NEXT_PUBLIC_TELEGRAM_URL }>
						<Telegram/>
					</NavItemSvg>
				</NavRight>
			</div>
		</header>
	)
}