interface FetchAPIOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    authToken?: string
    body?: Record<string, unknown>
    next?: NextFetchRequestConfig
}

export const fetchAPI = async (url: string, options: FetchAPIOptions) => {
    const { method, authToken, body, next } = options

    const headers: RequestInit & { next?: NextFetchRequestConfig } = {
        method,
        headers: {
            "Content-Type": 'application/json',
            ...(authToken && { Authorization: `Bearer ${authToken}` })
        },
        ...(body && { body: JSON.stringify(body) }),
        ...(next && { next })
    }

    try {
        const res = await fetch(url, headers)
        const contentType = res.headers.get('content-type')

        if (contentType && contentType.includes('application/json') && res.ok) {
            return await res.json()
        } else {
            return {
                status: res.status,
                statusText: res.statusText
            }
        }
    } catch (error) {
        console.error(`Error ${ method } data: ${ error }`)

        throw error
    }
}