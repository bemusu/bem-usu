import { AboutSectionProps } from "@/lib/types"
import StrapiImage from "../StrapiImage"

const AboutSection = ({
    heading,
    description_1,
    description_2,
    logo_image_1,
    logo_image_2
}: Readonly<AboutSectionProps>) => {
    return (
        <section className="py-8 px-4">
            <div className="bg-white/50 backdrop-blur-md text-gray-800 rounded-2xl shadow-xl p-8 md:p-16 space-y-8 max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{heading}</h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
                    <div className="max-w-lg text-left">
                        <p className="text-base md:text-lg leading-relaxed">
                            {description_1}
                        </p>
                        <div className="flex justify-center mt-8">
                            <StrapiImage 
                                src={logo_image_1.url}
                                alt={logo_image_1.alternativeText}
                                width={280}
                                height={280}
                            />
                        </div>
                    </div>
                    <div className="max-w-lg text-left">
                        <div className="flex justify-center mb-8">
                        <StrapiImage 
                            src={logo_image_2?.url || "/img/bem_usu.png"} 
                            alt="Logo BEM USU" 
                            width={280} 
                            height={280} 
                        />
                        </div>
                        <p className="text-base md:text-lg leading-relaxed">
                            {description_2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection