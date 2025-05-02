export const uvIndexCategory = (uvIndex: number) => {
    if (uvIndex <= 2) {
        return {
            text: 'Low',
            protection: 'No protection required',
        }
    } else if (uvIndex <= 5) {
        return {
            text: 'Moderate',
            protection: 'Stay in shade near midday.',
        }
    } else if (uvIndex <= 7) {
        return {
            text: 'High',
            protection: 'Wear a hat and sunglasses.',
        }
    } else if (uvIndex <= 10) {
        return {
            text: 'Very High',
            protection: 'Apply sunscreen SPF 30+ every 2 hours.',
        }
    } else if (uvIndex > 10) {
        return {
            text: 'Extreme',
            protection: 'Avoid being outside.',
        }
    } else {
        return {
            text: 'Extreme',
            protection: 'Avoid being outside.',
        }
    }
}
