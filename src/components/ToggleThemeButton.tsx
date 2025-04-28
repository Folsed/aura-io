'use client'
import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    useColorScheme,
} from '@mui/material'

const ToggleThemeButton = () => {
    const { mode, setMode } = useColorScheme()
    if (!mode) {
        return null
    }

    return (
        <div className='absolute top-0 right-0'>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 1,
                    minHeight: '56px',
                }}
            >
                <FormControl>
                    <RadioGroup
                        aria-labelledby='demo-theme-toggle'
                        name='theme-toggle'
                        row
                        value={mode}
                        onChange={event =>
                            setMode(event.target.value as 'light' | 'dark')
                        }
                    >
                        <FormControlLabel value='light' control={<Radio />} label='Light' />
                        <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    )
}
export default ToggleThemeButton
