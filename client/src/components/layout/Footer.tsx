import { FooterProps } from "@/lib/types";
import Link from "next/link";
import StrapiImage from "../StrapiImage";

export function Footer({
    quick_link_title,
    navigation_links,
    bem_logo, cabinet_logo,
    brand_name,
    university_name,
    social_links,
    contact_info_title,
    contact_items,
    copyright
}: Readonly<FooterProps>) {
    return (
        <footer className="bg-white text-slate-800 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    <div className="md:text-left">
                        <h3 className="font-bold text-lg mb-4">{quick_link_title}</h3>
                        <ul className="space-y-3 text-slate-600">
                            {navigation_links.map(link => (
                                <li key={link.id}>
                                    <Link
                                        href={`${link.text}-${link.id}`}
                                        className="hover:text-green-600 transition-colors"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-3">
                            <StrapiImage
                                src={bem_logo.url}
                                alt={bem_logo.alternativeText || "Logo BEM USU"}
                                width={50}
                                height={50}
                            />
                            {cabinet_logo && (
                                <StrapiImage
                                    src={cabinet_logo.url}
                                    alt={cabinet_logo.alternativeText || "Logo Kabinet Aksi Bersama"}
                                    width={50}
                                    height={50}
                                />
                            )}
                        </div>
                        <p className="font-bold text-base">{brand_name}</p>
                        <p className="text-sm text-slate-500">{university_name}</p>

                        <div className="flex space-x-2 mt-5">
                            {social_links.map(link => (
                                <Link
                                    key={`${link.social_link.text}-${link.social_link.id}`}
                                    href={link.social_link.href}
                                    target={link.social_link.isExternal ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={link.social_link.text}
                                    className="bg-slate-800 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
                                >
                                    <StrapiImage
                                        src={link.icon.url}
                                        alt={link.icon.alternativeText || 'sosmed-icon'}
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:text-left">
                        <h3 className="font-bold text-lg mb-4">{contact_info_title}</h3>
                        <address className="not-italic space-y-4 text-slate-600">
                            {contact_items.map(item => (
                                <Link
                                    key={`${item.social_link.text}-${item.social_link.id}`}
                                    href={item.social_link.href}
                                    target="_blank"
                                >
                                    <div
                                        className="flex items-center justify-center md:justify-start gap-3"
                                    >
                                        <StrapiImage
                                            src={item.icon.url}
                                            alt={item.icon.alternativeText || 'sosmed-icon'}
                                            width={20}
                                            height={20}
                                        />
                                        <span>{item.social_link.text}</span>
                                    </div>
                                </Link>
                            ))}
                        </address>
                    </div>

                </div>

                <hr className="border-slate-200 my-8" />
                <div className="text-center text-sm text-slate-500">
                    <p>{copyright}</p>
                </div>
            </div>
        </footer>
    );
}