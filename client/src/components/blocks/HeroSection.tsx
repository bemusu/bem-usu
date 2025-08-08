import { HeroSectionProps } from "@/lib/types"
import { getStrapiMedia } from "../StrapiImage"
import Link from "next/link"

const HeroSection = ({
    image,
    heading,
    description,
    cta,
    darken = false
}: Readonly<HeroSectionProps>) => {
    return (
        <section
            className="relative text-white text-center py-40 px-6"
            style={{
                backgroundImage: `url(${getStrapiMedia(image.url)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <p className="text-black text-lg">{getStrapiMedia(image.url)}</p>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold tracking-wide leading-tight">{heading}</h1>
                {/* <h2 className="text-4xl font-bold mt-2">BEM USU 2024/2025</h2> */}
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    {description}
                </p>
                <Link href={cta.href}>
                    <button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg cursor-pointer">
                        {cta.text}
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection