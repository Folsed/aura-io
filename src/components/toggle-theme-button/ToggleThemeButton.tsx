'use client'
import './toggle-button.css'

import { useState } from 'react'
import { useTheme } from 'next-themes'

const ToggleThemeButton = () => {
    const { setTheme, resolvedTheme } = useTheme()

    const handleTheme = () => {
        setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'))
    }

    return (
        <div className='absolute top-2 right-2'>
            <button
                className={`theme__icon ${resolvedTheme === 'light' ? 'light' : 'dark'}`}
                onClick={handleTheme}
            >
                <span></span>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span></span>
            </button>
        </div>
    )
}
export default ToggleThemeButton
