import { CommandIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Command, CommandInput } from '../ui/command'

const SearchDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className='border'>
                    <p className='text-muted-foreground text-sm'>Search here...</p>
                    <div className='command ml-[10rem] flex items-center gap-2 rounded-sm bg-slate-200 py-[2px] pr-[7px] pl-[5px] dark:bg-[#262626]'>
                        <CommandIcon />
                        <span className='text-sm'>F</span>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className='p-2'>
                <DialogTitle className='hidden'>Search</DialogTitle>
                <Command className='rounded-lg border shadow-md'>
                    <CommandInput placeholder='Type a command or search...' />
                    <ul className='px-3 pb-2'>
                        <p className='text-muted-foreground p-2 text-sm'>Suggestions</p>
                    </ul>
                </Command>
            </DialogContent>
        </Dialog>
    )
}
export default SearchDialog
