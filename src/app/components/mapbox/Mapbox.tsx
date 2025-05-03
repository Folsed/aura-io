'use client'
import { selectCoordinates } from '@/store/features/coordinates/coordinatesSlice'
import { useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const RecenterOnCoordinates = ({ lat, lon }: { lat: number; lon: number }) => {
    const map = useMap()

    useEffect(() => {
        map.flyTo([lat, lon], 13, { duration: 1.5 })
    }, [lat, lon, map])

    return null
}

const Mapbox = () => {
    const coordinates = useAppSelector(selectCoordinates)

    return (
        <div className='flex-1 basis-[50%] rounded-lg border h-[500px]'>
            <MapContainer
                center={[coordinates.lat, coordinates.lon]}
                zoom={13}
                scrollWheelZoom={false}
                className='m-4 rounded-lg'
                style={{ height: 'calc(100% - 2rem)', width: 'calc(100% - 2rem)' }}
            >
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <RecenterOnCoordinates lat={coordinates.lat} lon={coordinates.lon} />
            </MapContainer>
        </div>
    )
}
export default Mapbox
