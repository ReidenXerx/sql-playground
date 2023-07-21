import hashMockRequests from 'src/mocks'
import { RequestMethods, SourceDatabaseName } from '../constants'

type RequestParams = {
  method: RequestMethods
  headers?: Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: { source: SourceDatabaseName; sql: string } | null
  signal?: AbortSignal
}

export const fetchRequest = async <ReturnType>(
  url: string,
  { method, headers = {}, body = null, signal }: RequestParams,
): Promise<ReturnType> => {
  const config: RequestInit = {
    method,
    headers: {
      ...headers,
    },
    signal,
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    let response = {} as Response
    if (
      Object.keys(hashMockRequests).includes(body?.sql ?? '') &&
      body?.source
    ) {
      response = await hashMockRequests[body?.sql ?? ''][body?.source]()
    } else {
      response = await fetch(url, config)
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('There was an error with your request', error)
    throw error
  }
}
