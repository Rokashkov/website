import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface InitialState {
	theme: 'light' | 'dark'
}

const initialState: InitialState = {
	theme: 'light'
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<InitialState>) => {
			const { theme } = action.payload
			state.theme = theme
		},
		switchTheme: (state) => {
			let { theme } = state
			if (theme === 'dark') {
				theme = 'light'
			}
			if (theme === 'light') {
				theme = 'dark'
			}
		},
	}
})

export const {
	setTheme,
	switchTheme
} = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer