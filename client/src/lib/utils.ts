import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getStrapiUrl = () => {
	return process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337"
}
