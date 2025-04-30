import React from 'react'
import { ThemeProvider } from 'next-themes'
import StoreProvider from './StoreProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </StoreProvider>
    )
}

export default Providers
