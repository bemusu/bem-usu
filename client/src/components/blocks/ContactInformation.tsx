import { ContactInformationProps } from '@/lib/types'
import Link from 'next/link'
import React from 'react'
import StrapiImage from '../StrapiImage'

const ContactInformation = ({
    title,
    subtitle,
    contact_items,
    social_media
}: Readonly<ContactInformationProps>) => {
    return (
        <div className="p-8 md:p-12 text-slate-800 flex flex-col">
            <div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-slate-600 mt-2">{subtitle}</p>
            </div>

            <ul className="space-y-6 mt-10">
                {contact_items.map(item => (
                    <li
                        key={`${item.social_link}-${item.id}`}
                    >
                        <Link
                            href={item.social_link.href}
                            target={item.social_link.isExternal ? '_blank' : ''}
                            className='flex items-center gap-4'
                        >
                            <StrapiImage 
                                src={item.icon.url}
                                alt={item.icon.alternativeText}
                                className='w-5 h-5 text-slate-600 shrink-0'
                                width={20}
                                height={20}
                            />
                            <span>{item.social_link.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-12 flex space-x-4">
                {social_media.map(item => (
                    <Link
                        key={`${item.social_link}-${item.id}`}
                        href={item.social_link.href}
                        className="p-3 bg-slate-200/50 rounded-full text-slate-600 hover:bg-slate-200 transition-colors flex items-center"
                        target={item.social_link.isExternal ? '_blank' : ''}
                    >
                        <StrapiImage 
                            src={item.icon.url}
                            alt={item.icon.alternativeText}
                            className='w-5 h-5'
                            width={20}
                            height={20}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ContactInformation