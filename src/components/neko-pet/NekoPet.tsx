'use client'
import { useEffect, useRef } from 'react'
import { spriteMap, SpriteSet } from './_spriteMap'

const NEKO_SPEED = 10

const NekoPet = () => {
    const nekoRef = useRef<HTMLDivElement | null>(null)
    const nekoPos = useRef({ x: 32, y: 32 })
    const mousePos = useRef({ x: 0, y: 0 })
    const idleAnimation = useRef<string | null>(null)
    const idleFrame = useRef(0)
    const idleTime = useRef(0)
    const frameCount = useRef(0)

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {    // Update mouse position
            mousePos.current.x = e.clientX
            mousePos.current.y = e.clientY
        }

        document.addEventListener('mousemove', onMouseMove)     // Add mouse move event listener

        const setSprite = (name: SpriteSet, frame: number) => {     // Set sprite based on name and frame
            if (!nekoRef.current) return
            const sprite = spriteMap[name][frame % spriteMap[name].length]
            nekoRef.current.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`
        }

        const resetIdle = () => {   // Reset idle animation
            idleAnimation.current = null
            idleFrame.current = 0
        }

        const idle = () => {    // Idle animation
            idleTime.current += 1
            if (
                idleTime.current > 10 &&
                Math.floor(Math.random() * 200) === 0 &&
                idleAnimation.current === null
            ) {
                idleAnimation.current = Math.random() < 0.5 ? 'sleeping' : 'scratch'
            }

            switch (idleAnimation.current) {
                case 'sleeping':
                    if (idleFrame.current < 8) {
                        setSprite('tired', 0)
                        break
                    }
                    setSprite('sleeping', Math.floor(idleFrame.current / 4))
                    if (idleFrame.current > 192) resetIdle()
                    break
                case 'scratch':
                    setSprite('scratch', idleFrame.current)
                    if (idleFrame.current > 9) resetIdle()
                    break
                default:
                    setSprite('idle', 0)
                    return
            }

            idleFrame.current += 1
        }

        const frame = () => {   // Frame update function
            frameCount.current += 1

            const dx = nekoPos.current.x - mousePos.current.x
            const dy = nekoPos.current.y - mousePos.current.y
            const dist = Math.sqrt(dx ** 2 + dy ** 2)

            if (dist < NEKO_SPEED || dist < 48) {
                idle()
                return
            }

            resetIdle()
            if (idleTime.current > 1) {
                setSprite('alert', 0)
                idleTime.current = Math.min(idleTime.current, 7)
                idleTime.current -= 1
                return
            }

            let direction = ''
            direction += dy / dist > 0.5 ? 'N' : ''
            direction += dy / dist < -0.5 ? 'S' : ''
            direction += dx / dist > 0.5 ? 'W' : ''
            direction += dx / dist < -0.5 ? 'E' : ''

            setSprite(direction as SpriteSet, frameCount.current)

            nekoPos.current.x -= (dx / dist) * NEKO_SPEED
            nekoPos.current.y -= (dy / dist) * NEKO_SPEED

            if (nekoRef.current) {
                nekoRef.current.style.left = `${nekoPos.current.x - 16}px`
                nekoRef.current.style.top = `${nekoPos.current.y - 16}px`
            }
        }

        const interval = setInterval(frame, 100)    // Frame update interval

        return () => {  // Cleanup function
            clearInterval(interval)
            document.removeEventListener('mousemove', onMouseMove)
            document.getElementById('neko-pet')?.remove() // Remove the neko pet element from the DOM
        }
    }, [])

    return (
        <div
            id='neko-pet'
            className='fixed top-2 left-2 h-8 w-8 bg-[url(/gifs/neko.gif)] [image-rendering:pixelated]'
            ref={nekoRef}
        />
    )
}
export default NekoPet
