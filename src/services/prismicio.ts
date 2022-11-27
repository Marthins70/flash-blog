import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from '../../sm.json'

/**
 * The project's Prismic repository name.
 */
const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export function createClient({
    previewData,
    req,
    ...config
}: prismicNext.CreateClientConfig = {}) {
    const client = prismic.createClient(repositoryName, { ...config })

    prismicNext.enableAutoPreviews({
        client,
        previewData: previewData,
        req: req,
    })

    return client
}