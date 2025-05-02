export const getVisibilityDescription = (visibility: number) => {
    const visibilityInKm = Math.round(visibility / 1000)

    if (visibilityInKm > 10) return 'Excellent: Clear and vast view'
    if (visibilityInKm > 5) return 'Good: Easily navigable'
    if (visibilityInKm > 2) return 'Moderate: Some limitations'
    if (visibilityInKm <= 2) return 'Poor: Restricted and unclear'
    return 'Unavailable: Visibility data not available'
}
