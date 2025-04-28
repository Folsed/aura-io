import React from 'react'
import { api } from '@/services/axios'
import Image from 'next/image'

const WaifuGrid = async () => {
    const waifus = await api('search?limit=20').then(data => {
        return data?.data
    })

    return (
        <div>
            {waifus?.images?.map((item: any) => (
                <Image src={item.url} width={500} height={700} alt='' />
            ))}
        </div>
    )
}

export default WaifuGrid
