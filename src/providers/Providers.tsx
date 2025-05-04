import React from 'react'
import { ThemeProvider } from 'next-themes'
import StoreProvider from './StoreProvider'
import SplashScreenProvider from './SplashScreenProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                <SplashScreenProvider>{children}</SplashScreenProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default Providers
