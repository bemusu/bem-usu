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

export interface SocialLink {
    id: number
    icon: ImageProps
    social_link: LinkProps
}

export interface HeaderProps {
    id: number
    bem_logo: LogoProps
    cabinet_logo?: LogoProps
    title: string
    navigation_links: LinkProps[]
    cta: LinkProps
}

export interface FooterProps {
    id: number
    quick_link_title: string
    navigation_links: LinkProps[]
    bem_logo: ImageProps
    cabinet_logo?: ImageProps
    brand_name: string
    university_name: string
    social_links: SocialLink[]
    contact_info_title: string
    contact_items: SocialLink[]
    copyright: string
}

export interface CategoryProps {
    id: number
    documentId: string
    category_name: string
    slug: string
    description: string
}

export interface ArticleProps {
    id: number
    documentId: string
    title: string
    slug: string
    image: ImageProps
    author: string
    description: string
    categories: CategoryProps[]
    featured: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface DepartmentProps {
    id: number
    documentId: string
    department_name: string
    slug: string
}

export interface MemberProps {
    id: number
    documentId: string
    name: string
    position: string
    photo: ImageProps
    department: DepartmentProps
}

export interface BerkasProps {
    id: number
    documentId: string
    url: string
    alternativeText: string
}

export interface ProsedurProps {
    id: number
    documentId: string
    icon: ImageProps
    prosedur_name: string
    berkas: BerkasProps
}

export interface ReportProps {
    name: string
    nim: string
    faculty: string
    program_study: string
    whatsapp_number: string
    problem_category: string
    date: string
    message: string
}

type ComponentType =
    "blocks.hero-section"
    | "blocks.about-section"
    | "blocks.vision-and-mission-section"
    | "blocks.featured-programs"
    | "blocks.logo-philosophy"
    | "blocks.quote-block"
    | "blocks.content"
    | "blocks.contact-information"

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

export interface QuoteBlockProps extends Base<"blocks.quote-block"> {
    quote: string
}

export interface ContentProps extends Base<"blocks.content"> {
    content: string
}

export interface ContactInformationProps extends Base<"blocks.contact-information"> {
    title: string
    subtitle: string
    contact_items: SocialLink[]
    social_media: SocialLink[]
}

export type Block =
    HeroSectionProps
    | AboutSectionProps
    | VisionMissionSectionProps
    | FeaturedProgramsProps
    | LogoPhilosophyProps
    | QuoteBlockProps
    | ContentProps
    | ContactInformationProps
