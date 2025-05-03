import { useEffect } from 'react'
import { useState } from 'react'

const useDebounce = <T>(value: T, delay: number) => {
    const [debValue, setDebValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debValue
}

export default useDebounce
