import BlockRenderer from "@/components/BlockRenderer"
import { getPageBySlug } from "@/data/loaders"
import { notFound } from "next/navigation"


interface PageProps {
    params: Promise<{
        slug: string
    }>
}

const loader = async (slug: string) => {
    const { data } = await getPageBySlug(slug)

    if (!data || data.length === 0) {
        return notFound()
    }

    return { blocks: data[0].blocks || [] }
}

const page = async ({
    params
}: Readonly<PageProps>) => {
    const slug = (await params).slug
    const block = await loader(slug)

    return (
        <BlockRenderer {...block} />
    )
}

export default page