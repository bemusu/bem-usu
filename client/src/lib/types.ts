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

export interface FeaturedProgramCardProps {
    id: number
    title: string
    description: string
    cta?: LinkProps
    image: ImageProps
    icon: ImageProps
}

export interface MissionItemProps {
    id: number
    text: string
}

export interface PhilosophyItemProps {
    id: number
    icon: ImageProps
    title: string
    description: string
}

type ComponentType = 
    "blocks.hero-section" 
    | "blocks.about-section"
    | "blocks.vision-and-mission-section"
    | "blocks.featured-programs"
    | "blocks.logo-philosophy"

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

export interface VisionMissionSectionProps extends Base<"blocks.vision-and-mission-section"> {
    eyebrow_title: string
    vision_title: string
    vision_description: string
    mission_title: string
    mission_items: MissionItemProps[]
    image: ImageProps
}

export interface FeaturedProgramsProps extends Base<"blocks.featured-programs"> {
    title: string
    programs: FeaturedProgramCardProps[]
}

export interface LogoPhilosophyProps extends Base<"blocks.logo-philosophy"> {
    title: string
    main_logo: ImageProps
    logo_name: string
    logo_description: string
    philosophy_items: PhilosophyItemProps[]
}

export type Block = 
    HeroSectionProps 
    | AboutSectionProps
    | VisionMissionSectionProps
    | FeaturedProgramsProps
    | LogoPhilosophyProps
