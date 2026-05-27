export interface GeocodingResponse {
  results?: {
    name?: string
    latitude?: number
    longitude?: number
    country?: string
  }[]
}
