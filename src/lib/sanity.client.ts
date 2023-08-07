import { createClient, type SanityClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export function getClient({preview}: {preview?: {token: string}}): SanityClient {
    const client = createClient({
        projectId,
        dataset,
        apiVersion: '2023-08-06',
        useCdn: true,
        perspective: 'published',
    })
    if(preview) {
        if(!preview.token) {
            throw new Error('Missing preview token')
        }
        return client.withConfig({
            token: preview.token,
            useCdn: false,
            ignoreBrowserTokenWarning: true,
            perspective: 'previewDrafts',
        })
    }
    return client
}
    