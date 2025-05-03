export interface ICountry {
    name: string
    local_names: ICountryLocalNames
    lat: number
    lon: number
    country: string
    state?: string
}

export interface ICountryLocalNames {
    ar: string
    ascii: string
    bg: string
    ca: string
    de: string
    el: string
    en: string
    fa: string
    feature_name: string
    fi: string
    fr: string
    gl: string
    he: string
    hi: string
    id: string
    it: string
    ja: string
    la: string
    lt: string
    pt: string
    ru: string
    sr: string
    th: string
    tr: string
    vi: string
    zu: string
}
