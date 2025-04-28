// Relate to NekoPet.tsx
//
// This file contains the sprite map for the NekoPet component. It defines the sprite positions for different animations and directions.
//
// Description: N - North, NE - North East, E - East, SE - South East, S - South, SW - South West, W - West, NW - North West


export const spriteMap = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratch: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
    ],
    tired: [[-3, -2]],
    sleeping: [
        [-2, 0],
        [-2, -1],
    ],
    N: [
        [-1, -2],
        [-1, -3],
    ],
    NE: [
        [0, -2],
        [0, -3],
    ],
    E: [
        [-3, 0],
        [-3, -1],
    ],
    SE: [
        [-5, -1],
        [-5, -2],
    ],
    S: [
        [-6, -3],
        [-7, -2],
    ],
    SW: [
        [-5, -3],
        [-6, -1],
    ],
    W: [
        [-4, -2],
        [-4, -3],
    ],
    NW: [
        [-1, 0],
        [-1, -1],
    ],
}
export type SpriteSet = keyof typeof spriteMap
