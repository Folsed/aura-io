const Footer = () => {
    const text =
        'l_▞▚▞▚▞▚▞_Redux Toolkit_▞▚▞▚▞▚▞_GSAP_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_Redux Toolkit_▞▚▞▚▞▚▞_GSAP_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_Redux Toolkit_▞▚▞▚▞▚▞_GSAP_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_Redux Toolkit_▞▚▞▚▞▚▞_GSAP_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_Redux Toolkit_▞▚▞▚▞▚▞_GSAP_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_Redux Toolkit_▞▚▞▚▞▚▞_GSAP_▞▚▞▚▞▚▞_Copyright_2025_▞▚▞▚▞▚▞_Next.JS_Verce'
    return (
        <div className='relative mt-24 flex overflow-hidden select-none text-primary'>
            <ul className='flex min-w-full shrink-0 list-none animate-marquee'>
                <li>{text}</li>
            </ul>

            <ul aria-hidden className='flex min-w-full shrink-0 list-none animate-marquee'>
                <li>{text}</li>
            </ul>
        </div>
    )
}
export default Footer
