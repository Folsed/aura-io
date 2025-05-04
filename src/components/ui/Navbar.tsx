import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { CatIcon, Github } from 'lucide-react'
import { ToggleThemeButton } from '../toggle-theme-button/ToggleThemeButton'
import SearchDialog from '../search-dialog/SearchDialog'

function Navbar() {
    useEffect(() => {
        const saved = localStorage.getItem('neko')
        const neko = document.getElementById('neko-pet')
        if (saved === 'off' && neko) {
            neko.classList.remove('sm:block')
            neko.classList.add('sm:hidden')
        }
    }, [])

    const handleHideNeko = () => {
        const neko = document.getElementById('neko-pet')
        if (!neko) return

        if (!neko.classList.contains('sm:hidden')) {
            neko.classList.remove('sm:block')
            neko.classList.add('sm:hidden')
            localStorage.setItem('neko', 'off')
        } else {
            neko.classList.remove('sm:hidden')
            neko.classList.add('sm:block')
            localStorage.setItem('neko', 'on')
        }
    }

    return (
        <div className='flex w-full items-center justify-between py-4'>
            <div className='left'></div>
            <div className='search-container flex w-full shrink-0 gap-2 sm:w-fit'>
                <SearchDialog />

                <div className='btn-group flex items-center gap-2'>
                    <ToggleThemeButton />
                    <Button
                        onClick={handleHideNeko}
                        className='hidden sm:block'
                        variant='outline'
                        title='Hide neko'
                    >
                        <CatIcon />
                    </Button>

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
