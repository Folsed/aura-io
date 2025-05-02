export const feelsLikeText = (feelsLike: number, minTemo: number, maxTemp: number) => {
    const avgTemp = (minTemo + maxTemp) / 2

    if (feelsLike < avgTemp - 5) {
        return 'Feels significantly colder than actual temperature.'
    }
    if (feelsLike > avgTemp - 5 && feelsLike <= avgTemp + 5) {
        return 'Feels close to the actual temperature.'
    }
    if (feelsLike > avgTemp + 5) {
        return 'Feels significantly warmer than actual temperature.'
    }

    return 'Temperature feeling is typical for this range.'
}
