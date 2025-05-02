export const getPressureDescription = (pressure: number) => {
    if (pressure < 1000) return 'Very low pressure'

    if (pressure >= 1000 && pressure < 1015) return 'Low pressure. Expect weather changes.'

    if (pressure >= 1015 && pressure < 1025) return 'Normal pressure. Expect weather changes.'

    if (pressure >= 1025 && pressure < 1040) return 'High pressure. Expect weather changes.'

    if (pressure >= 1040) return 'Very high pressure. Expect weather changes.'

    return 'Unavailable pressure data'
}
