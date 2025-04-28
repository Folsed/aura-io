'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
// import { useGlobalContext } from '../context/globalContext'
import { Github } from 'lucide-react'
import { ToggleThemeButton } from '../toggle-theme-button/ToggleThemeButton'
import SearchDialog from '../search-dialog/SearchDialog'

function Navbar() {
    const router = useRouter()
    // const { state } = useGlobalContext()

    return (
        <div className='flex w-full items-center justify-between py-4'>
            <div className='left'></div>
            <div className='search-container flex w-full shrink-0 gap-2 sm:w-fit'>
                <SearchDialog />

                <div className='btn-group flex items-center gap-2'>
                    <ToggleThemeButton />

                    <Button
                        className='source-code-btn flex items-center gap-2'
                        onClick={() => {
                            router.push('https//github.com')
                        }}
                    >
                        <Github /> Source Code
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
