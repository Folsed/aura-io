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
            neko.classList.remove('block')
            neko.classList.add('hidden')
        }
    }, [])

    const handleHideNeko = () => {
        const neko = document.getElementById('neko-pet')
        if (!neko) return

        if (!neko.classList.contains('hidden')) {
            neko.classList.remove('block')
            neko.classList.add('hidden')
            localStorage.setItem('neko', 'off')
        } else {
            neko.classList.remove('hidden')
            neko.classList.add('block')
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
                    <Button onClick={handleHideNeko} variant='outline'>
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
