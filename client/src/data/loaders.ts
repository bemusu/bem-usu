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
    const apiRoute = '/api/home-page'
    const url = new URL(apiRoute, BASE_URL)
    url.search = homePageQuery

    return await fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}

const pageBySlugQuery = (slug: string) => qs.stringify({
    filters: {
        slug: {
            $eq: slug
        }
    },
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
                },
                "blocks.vision-and-mission-section": {
                    populate: {
                        mission_items: true,
                        image: {
                            fields: ['url', 'alternativeText']
                        }
                    }
                },
                "blocks.featured-programs": {
                    populate: {
                        programs: {
                            populate: {
                                cta: true,
                                image: {
                                    fields: ['url', 'alternativeText']
                                },
                                icon: {
                                    fields: ['url', 'alternativeText']
                                }
                            }
                        }
                    }
                },
                "blocks.logo-philosophy": {
                    populate: {
                        main_logo: {
                            fields: ['url', 'alternativeText']
                        },
                        philosophy_items: {
                            populate: {
                                icon: {
                                    fields: ['url', 'alternativeText']
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

export const getPageBySlug = async (slug: string) => {
    const apiRoute = '/api/pages'
    const url = new URL(apiRoute, BASE_URL)
    url.search = pageBySlugQuery(slug)

    return await fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}
