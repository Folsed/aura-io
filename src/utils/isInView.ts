export function isInView(element: HTMLElement, dist = 0): boolean {
    const rect = element.getBoundingClientRect()
    const height = window.innerHeight || document.documentElement.clientHeight
    const width = window.innerWidth || document.documentElement.clientWidth
    return (
        rect.bottom >= -dist &&
        rect.right >= -dist &&
        rect.top <= height + dist &&
        rect.left <= width + dist
    )
}
