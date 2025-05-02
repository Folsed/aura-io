import { defaultStates } from '@/utils/defaultStates'

const TopLargeSities = () => {
    return (
        <div className='states flex flex-1 flex-col gap-3'>
            <h2 className='flex items-center gap-2 font-medium'>Top Large Cities</h2>
            <div className='flex flex-col gap-4'>
                {defaultStates.map((state, index) => {
                    return (
                        <div
                            key={index}
                            className='cursor-pointer rounded-lg border shadow-sm dark:shadow-none'
                            // onClick={() => {
                            //     getClickedCityCords(state.lat, state.lon)
                            // }}
                        >
                            <p className='px-6 py-4'>{state.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TopLargeSities
