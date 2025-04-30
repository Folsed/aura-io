'use client'

import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    return (
        <div>
            <span>Test Page</span>
            <button onClick={() => router.push('/')}>Back</button>
        </div>
    )
}
export default page
