'use client'
import { CommandIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Command, CommandInput } from '../ui/command'
import { useGetSearchedCountryQuery } from '@/store/features/weather/weatherApiSlice'
import { useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useAppDispatch } from '@/store/hooks'
import { setCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { v4 as uuidv4 } from 'uuid'

const SearchDialog = () => {
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState('')
    const debouncedSearchInput = useDebounce(searchInput, 400)
    const { data, isLoading, isError } = useGetSearchedCountryQuery(
        { searchInput: debouncedSearchInput },
        {
            skip: debouncedSearchInput.trim() === '',
        }
    )

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    const handleSetCoordinates = (lat: number, lon: number) => {
        localStorage.setItem('current-city-coordinates', JSON.stringify({ lat, lon }))
        dispatch(setCoordinates({ lat: lat, lon: lon }))
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className='border'>
                    <p className='text-muted-foreground hidden text-lg sm:block'>Search here...</p>
                    <div className='flex items-center gap-2 rounded-sm bg-slate-200 py-[2px] pr-[7px] pl-[5px] sm:ml-[10rem] dark:bg-[#262626]'>
                        <CommandIcon />
                        <span className='text-sm'>Search</span>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className='p-2'>
                <DialogTitle className='hidden'>Search</DialogTitle>
                <DialogDescription className='hidden'></DialogDescription>
                <Command className='rounded-lg border'>
                    <CommandInput
                        className='text-lg'
                        placeholder='Type a command or search...'
                        onChangeCapture={handleSearchInput}
                    />
                    <ul className=''>
                        {isError ? (
                            <p className='text-muted-foreground p-2'>Data unavailable</p>
                        ) : data ? (
                            data.length > 0 ? (
                                data.map(item => (
                                    <DialogClose asChild key={uuidv4()}>
                                        <Button
                                            variant='outline'
                                            className='text-muted-foreground text-md flex w-full justify-start'
                                            onClick={() => handleSetCoordinates(item.lat, item.lon)}
                                        >
                                            {item.name}
                                            {item.state && `, ${item.state}`}
                                        </Button>
                                    </DialogClose>
                                ))
                            ) : (
                                <p className='text-muted-foreground p-2'>No results found</p>
                            )
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
