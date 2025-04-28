import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import AppThemeProvider from './AppThemeProvider'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
            <AppThemeProvider>
                {/* <InitColorSchemeScript attribute='class' /> */}
                
                {children}
            </AppThemeProvider>
        </AppRouterCacheProvider>
    )
}

export default Providers
