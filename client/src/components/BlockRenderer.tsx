import { Block } from "@/lib/types"
import AboutSection from "./blocks/AboutSection"
import FeaturedPrograms from "./blocks/FeaturedPrograms"
import LogoPhilosophy from "./blocks/LogoPhilosophy"
import VisionMissionSection from "./blocks/VisionMissionSection"
import HeroSection from "./blocks/HeroSection"
import QuoteBlock from "./blocks/QuoteBlock"
import ContentBlock from "./blocks/ContentBlock"


export const blockRenderer = (block: Block) => {
    switch (block.__component) {
        case "blocks.hero-section":
            return <HeroSection key={`${block.__component}-${block.id}`} {...block} />
        case "blocks.about-section":
            return <AboutSection key={`${block.__component}-${block.id}`} {...block} />
        case "blocks.vision-and-mission-section":
            return <VisionMissionSection key={`${block.__component}-${block.id}`} {...block} />
        case "blocks.featured-programs":
            return <FeaturedPrograms key={`${block.__component}-${block.id}`} {...block} />
        case "blocks.logo-philosophy":
            return <LogoPhilosophy key={`${block.__component}-${block.id}`} {...block} />
        case "blocks.quote-block":
            return <QuoteBlock key={`${block.__component}-${block.id}`} {...block} />
        case "blocks.content":
            return <ContentBlock key={`${block.__component}-${block.id}`} {...block} />
        default:
            return null
    }
}

const BlockRenderer = ({ blocks }: Readonly<{ blocks: Block[] }>) => {
    const heroBlock = blocks.find(block => block.__component === 'blocks.hero-section')
    const otherBlocks = blocks.filter(block => block.__component !== 'blocks.hero-section')

    return (
        <div>
            {heroBlock && blockRenderer(heroBlock)}

            <div className="container mx-auto px-6 py-20 md:py-28">
                {otherBlocks.map(block => blockRenderer(block))}
            </div>
        </div>
    )
}

export default BlockRenderer