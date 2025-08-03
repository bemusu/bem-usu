export interface LinkProps {
    id: number
    text: string
    href: string
    isExternal: boolean
}

export interface ImageProps {
    id: number
    documentId: string
    url: string
    alternativeText: string
}

export interface LogoProps {
    id: number
    image: ImageProps
}

type ComponentType = "blocks.hero-section" | "blocks.about-section"

interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
    id: number
    __component?: T
    documentId?: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
    data?: D
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
    image: ImageProps
    heading: string
    description: string
    cta: LinkProps
    darken?: boolean
}

export interface AboutSectionProps extends Base<"blocks.about-section"> {
    heading: string
    description_1: string
    logo_image_1: ImageProps
    description_2?: string
    logo_image_2?: ImageProps
}

export type Block = HeroSectionProps | AboutSectionProps
