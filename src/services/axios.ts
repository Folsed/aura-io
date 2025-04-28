import axios from 'axios'

export const api = async (path: string) => {
    try {
        return await axios.get(`${process.env.API_BASE_URL}${path}`)
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API request failed:', error.message)
        } else {
            console.error('Unexpected error:', error)
        }
        return undefined
    }
}
