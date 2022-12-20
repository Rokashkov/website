import GitHub from '../Svg/GitHub'
import Telegram from '../Svg/Telegram'
import styles from './Footer.module.sass'

interface FooterProps {

}

export default function Footer (props: FooterProps) {
	const { NEXT_PUBLIC_GITHUB_URL, NEXT_PUBLIC_TELEGRAM_URL } = process.env
	
	return (
		<footer className={ styles.footer }>
			<div className={ styles.content }>
				<div className={ styles.media }>
					<div className={ styles.media_group }>
						<a 
							href={ NEXT_PUBLIC_GITHUB_URL }
							target="_blank"
							rel="noreferrer"
						>
							<GitHub/>
						</a>	
						<p>
							You can visit my
							{' '}
							<a 
								className={ styles.link }
								href={ NEXT_PUBLIC_GITHUB_URL }
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</p>
					</div>
					<p>or</p>
					<div className={ styles.media_group }>
						<a
							href={ NEXT_PUBLIC_TELEGRAM_URL }
							target="_blank"
							rel="noreferrer"
						>
							<Telegram/>
						</a>
						<p>
							You can text me on
							{' '}
							<a 
								className={ styles.link }
								href={ NEXT_PUBLIC_TELEGRAM_URL }
								target="_blank"
								rel="noreferrer"
							>
								Telegram
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}