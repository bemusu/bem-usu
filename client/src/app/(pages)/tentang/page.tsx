import VisionMissionSection from "@/components/blocks/VisionMissionSection";
import HeroSection from "@/components/blocks/HeroSection";
import FeaturedPrograms from "@/components/blocks/FeaturedPrograms";
import LogoPhilosophy from "@/components/blocks/LogoPhilosophy";
import { FeaturedProgramsProps, HeroSectionProps, LogoPhilosophyProps, VisionMissionSectionProps } from "@/lib/types";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/data/loaders";

const loader = async () => {
    const { data } = await getPageBySlug('tentang')

	if (data.length === 0) return notFound()

	return { blocks: data[0]?.blocks }
}

export default async function AboutPage() {
    const { blocks } = await loader()
    const heroSection: HeroSectionProps = blocks[0]
    const visionMission: VisionMissionSectionProps = blocks[1]
    const featuredPrograms: FeaturedProgramsProps = blocks[2]
    const logoPhilosophy: LogoPhilosophyProps = blocks[3]

    return (
        <div>
            {/* 1. Hero Section */}
            <HeroSection { ...heroSection } />

            <div className="container mx-auto px-6 py-20 md:py-28">

                {/* 2. Visi & Misi */}
                <VisionMissionSection { ...visionMission }/>

                {/* 3. Featured Programs */}
                <FeaturedPrograms { ...featuredPrograms } />

                {/* 4. Filosofi Logo */}
                <LogoPhilosophy { ...logoPhilosophy } />
                
            </div>
        </div>
    );
}