export const getHumidityText = (humidity: number) => {
    if (humidity < 30) return 'Dry: May cause skin irritation'
    if (humidity >= 30 && humidity < 50) return 'Comfortable: Ideal for health and comfort'
    if (humidity >= 50 && humidity < 70) return 'Moderate: Sticky, may increase allergens'
    if (humidity >= 70) return 'High: Uncomfortable, mold growth risk'
    return 'Unavailable: Humidity data not available'
}
