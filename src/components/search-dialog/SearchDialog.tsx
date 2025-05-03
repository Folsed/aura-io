'use client'
import { CommandIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Command, CommandInput } from '../ui/command'
import { useGetSearchedCountryQuery } from '@/store/features/weather/weatherApiSlice'
import { useEffect, useState } from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'
import useDebounce from '@/hooks/useDebounce'

const SearchDialog = () => {
    const [searchInput, setSearchInput] = useState('')
    const debouncedSearchInput = useDebounce(searchInput, 400)
    const { data, isLoading } = useGetSearchedCountryQuery(
        { searchInput: debouncedSearchInput },
        {
            skip: debouncedSearchInput.trim() === '',
        }
    )

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className='border'>
                    <p className='text-muted-foreground text-lg'>Search here...</p>
                    <div className='command ml-[10rem] flex items-center gap-2 rounded-sm bg-slate-200 py-[2px] pr-[7px] pl-[5px] dark:bg-[#262626]'>
                        <CommandIcon />
                        <span className='text-sm'>F</span>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className='p-2'>
                <DialogTitle className='hidden'>Search</DialogTitle>
                <Command className='rounded-lg border'>
                    <CommandInput
                        className='text-lg'
                        placeholder='Type a command or search...'
                        onChangeCapture={handleSearchInput}
                    />
                    <ul className=''>
                        {data ? (
                            data?.map(item => (
                                <Button
                                    variant='outline'
                                    className='text-muted-foreground text-md flex w-full justify-start'
                                >
                                    {item.name}
                                    {item.state && `, ${item.state}`}
                                </Button>
                            ))
                        ) : (
                            <p className='text-muted-foreground p-2'>Suggestions</p>
                        )}
                    </ul>
                </Command>
            </DialogContent>
        </Dialog>
    )
}
export default SearchDialog
