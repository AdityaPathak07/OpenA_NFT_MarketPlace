import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bsal8k42',
  dataset: 'production',
  apiVersion: '2022-12-01',
  token:
    'skYCVwZlH8CcUdUP3oOsE9UuBBUusAW6M84fzSHQ2fkXm67oF4fRBtSzgbHlfnnqSGsKXf5b8sM2YvMx2JuKUl814SuHvo26vKqjGqdz9YP954YXnCBZO0NjxqDZuWhH93xiC3yYwLss5RlHXIYDBRVFyVBXO2M7kR8TJiJU3kvDZTNgTrLM',
  useCdn: false,
})
