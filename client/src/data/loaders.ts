import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiUrl } from "@/lib/utils";
import qs from "qs"


const BASE_URL = getStrapiUrl()
const ARTICLE_PAGE_SIZE = 7

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
                },
                "blocks.contact-information": {
                    populate: {
                        contact_items: {
                            populate: {
                                icon: {
                                    fields: ['url', 'alternativeText']
                                },
                                social_link: true
                            }
                        },
                        social_media: {
                            populate: {
                                icon: {
                                    fields: ['url', 'alternativeText']
                                },
                                social_link: true
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


const globalSettingsQuery = qs.stringify({
    populate: {
        header: {
            populate: {
                bem_logo: {
                    populate: {
                        image: {
                            fields: ['url', 'alternativeText']
                        }
                    }
                },
                cabinet_logo: {
                    populate: {
                        image: {
                            fields: ['url', 'alternativeText']
                        }
                    }
                },
                navigation_links: true,
                cta: true
            }
        },
        footer: {
            populate: {
                navigation_links: true,
                bem_logo: {
                    fields: ['url', 'alternativeText']
                },
                social_links: {
                    populate: {
                        icon: {
                            fields: ['url', 'alternativeText']
                        },
                        social_link: true
                    }
                },
                contact_items: {
                    populate: {
                        icon: {
                            fields: ['url', 'alternativeText']
                        },
                        social_link: true
                    }
                }
            }
        }
    }
})

export const getGlobalSettings = async () => {
    const apiRoute = '/api/global'
    const url = new URL(apiRoute, BASE_URL)
    url.search = globalSettingsQuery

    return await fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}


const getArticlesQuery = (
    featured?: boolean,
    query?: string,
    page?: number,
    category?: string,
    excludeSlug?: string,
    pageSize?: number
) => qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
        $and: [
            {
                slug: {
                    $ne: excludeSlug
                }
            },
            {
                $or: [
                    { title: { $containsi: query } },
                    { description: { $containsi: query } }
                ]
            },
            {
                ...(category && {
                    categories: {
                        slug: {
                            $eq: category
                        }
                    }
                })
            }
        ],
        ...(featured && { featured: { $eq: featured } })
    },
    pagination: {
        pageSize: pageSize || ARTICLE_PAGE_SIZE,
        page: page || 1
    },
    populate: {
        image: {
            fields: ['url', 'alternativeText']
        },
        categories: true
    }
})

export const getCategories = async () => {
    const apiRoute = '/api/categories'
    const url = new URL(apiRoute, BASE_URL)

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}

export const getArticles = async (
    path: string,
    featured?: boolean,
    query?: string,
    page?: number,
    category?: string,
    excludeSlug?: string,
    pageSize?: number
) => {
    const url = new URL(path, BASE_URL)
    url.search = getArticlesQuery(featured, query, page, category, excludeSlug, pageSize)

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}


const getArticleBySlugQuery = (slug: string) => qs.stringify({
    filters: {
        slug: {
            $eq: slug
        }
    },
    populate: {
        image: {
            fields: ['url', 'alternativeText']
        },
        categories: true,
        blocks: {
            on: {
                "blocks.quote-block": {
                    populate: true
                },
                "blocks.content": {
                    populate: true
                }
            }
        }
    }
})

export const getArticleBySlug = async (slug: string) => {
    const apiRoute = '/api/articles'
    const url = new URL(apiRoute, BASE_URL)
    url.search = getArticleBySlugQuery(slug)

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}


const getDepartmentMemberQuery = qs.stringify({
    populate: {
        photo: {
            fields: ['url', 'alternativeText']
        },
        department: {
            populate: {
                ministry: true
            }
        }
    }
})

export const getMinistries = async () => {
    const apiRoute = '/api/ministries'
    const url = new URL(apiRoute, BASE_URL)

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}

const getDepartmentsQuery = qs.stringify({
    populate: {
        ministry: true
    }
})

export const getDepartments = async () => {
    const apiRoute = '/api/departments'
    const url = new URL(apiRoute, BASE_URL)
    url.search = getDepartmentsQuery

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}

export const getDepartmentMembers = async () => {
    const apiRoute = '/api/members'
    const url = new URL(apiRoute, BASE_URL)
    url.search = getDepartmentMemberQuery

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}


const getProsedursQuery = (query?: string) => qs.stringify({
    filters: {
        prosedur_name: { $containsi: query }
    },
    populate: {
        icon: {
            fields: ['url', 'alternativeText']
        },
        berkas: {
            fields: ['url', 'alternativeText']
        }
    }
})

export const getProsedurs = async (query?: string) => {
    const apiRoute = '/api/prosedurs'
    const url = new URL(apiRoute, BASE_URL)
    url.search = getProsedursQuery(query)

    return fetchAPI(url.href, {
        method: 'GET',
        next: { revalidate: 60 }
    })
}