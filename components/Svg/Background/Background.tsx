import styles from './Background.module.sass'

interface BackgroundProps {
	className: string
}

export default function Background (props: BackgroundProps) {
	const { className } = props
	
	return (
		<svg 
			className={ className }
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			viewBox="0 0 1000 1000"
		>
			<g>
				<path
					className={ styles.wave_first }
					d="M 0,59 C 50,137.6 150,433.8 250,452 C 350,470.2 400,144.2 500,150 C 600,155.8 650,489 750,481 C 850,473 950,184.2 1000,110L1000 1000L0 1000z"
				/>
				<path
					className={ styles.wave_second }
					d="M 0,912 C 50,873 150,727.8 250,717 C 350,706.2 400,883.2 500,858 C 600,832.8 650,601.8 750,591 C 850,580.2 950,761.4 1000,804L1000 1000L0 1000z"
				/>
			</g>
		</svg>
	)
}