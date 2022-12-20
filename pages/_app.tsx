import { ComponentType } from 'react'
import { Provider } from 'react-redux'
import Head from '../components/Head/Head'
import store from '../store/store'
import '../styles/global.sass'

export default function MyApp({ Component, pageProps }: { Component: ComponentType, pageProps: any }) {
	
	return (
		<Provider store={ store }>
			<Head/>
			<Component { ...pageProps }/>
		</Provider>
	)
}