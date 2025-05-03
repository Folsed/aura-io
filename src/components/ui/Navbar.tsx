import { Button } from '@/components/ui/button'
import React from 'react'
import { Github } from 'lucide-react'
import { ToggleThemeButton } from '../toggle-theme-button/ToggleThemeButton'
import SearchDialog from '../search-dialog/SearchDialog'

function Navbar() {
    return (
        <div className='flex w-full items-center justify-between py-4'>
            <div className='left'></div>
            <div className='search-container flex w-full shrink-0 gap-2 sm:w-fit'>
                <SearchDialog />

                <div className='btn-group flex items-center gap-2'>
                    <ToggleThemeButton />

                    <Button
                        className='source-code-btn flex items-center gap-2'
                        onClick={() => window.open('https://github.com/Folsed', '_blank')}
                    >
                        <Github /> Source Code
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
