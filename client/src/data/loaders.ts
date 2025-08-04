import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiUrl } from "@/lib/utils";
import qs from "qs"


const BASE_URL = getStrapiUrl()

const homePageQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        image: {
                            fields: ['url', 'alternativeText']
                        },
                        cta: true
                    }
                },
                "blocks.about-section": {
                    populate: {
                        logo_image_1: {
                            fields: ['url', 'alternativeText']
                        },
                        logo_image_2: {
                            fields: ['url', 'alternativeText']
                        }
                    }
                }
            }
        }
    }
})

export const getHomePage = async () => {
    const apiUrl = '/api/home-page'
    const url = new URL(apiUrl, BASE_URL)
    url.search = homePageQuery

    return await fetchAPI(url.href, { method: 'GET' })
}
