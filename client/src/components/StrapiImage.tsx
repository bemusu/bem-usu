import { getStrapiUrl } from "@/lib/utils"
import Image from "next/legacy/image";


interface StrapiImageProps {
    src: string
    alt: string
    className?: string
    [key: string]: | string | number | boolean | undefined
}

const StrapiImage = ({
    src,
    alt,
    className,
    ...rest
}: Readonly<StrapiImageProps>) => {
    const imgUrl = getStrapiMedia(src)
    if (!imgUrl) return null
    
    return (
        <Image 
            src={imgUrl}
            className={className}
            alt={alt || 'gambar-'}
            {...rest}
        />
    )
}

export const getStrapiMedia = (url: string | null) => {
    if (url === null) return null
    if (url.startsWith("data:")) return url
    if (url.startsWith("http") || url.startsWith("//")) return  url

    return getStrapiUrl() + url
}

export default StrapiImage