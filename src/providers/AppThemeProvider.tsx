'use client'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { createContext, ReactNode, useContext, useMemo } from 'react'

const AppThemeContext = createContext(null)

const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const theme = useMemo(() => {
        return responsiveFontSizes(
            createTheme({
                cssVariables: {
                    colorSchemeSelector: 'class',
                    disableCssColorScheme: true,
                },
                palette: {
                    primary: {
                        light: '#757ce8',
                        main: '#3f50b5',
                        dark: '#002884',
                        contrastText: '#fff',
                    },
                    secondary: {
                        light: '#ff7961',
                        main: '#f44336',
                        dark: '#ba000d',
                        contrastText: '#000',
                    },
                },
                colorSchemes: {
                    light: {
                        palette: {
                            primary: {
                                main: `rgb(123, 18, 42)`,
                            },
                            secondary: {
                                main: `rgb(57, 19, 221)`,
                            },
                        },
                    },
                    dark: {
                        palette: {
                            primary: {
                                main: `rgb(10, 18, 42)`,
                            },
                            secondary: {
                                main: `rgb(27, 59, 111)`,
                            },
                        },
                    },
                },
            })
        )
    }, [])

    return (
        <AppThemeContext.Provider value={null}>
            <ThemeProvider theme={theme} disableTransitionOnChange>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}

export const useAppThemeContext = () => useContext(AppThemeContext)

export default AppThemeProvider
