export interface Testimonial {
  readonly text: string
  readonly name: string
  readonly rating: number
}

export interface CityData {
  readonly name: string
  readonly title: string
  readonly subtitle: string
  readonly description: string
  readonly areas: readonly string[]
  readonly landmarks: readonly string[]
  readonly testimonial: Testimonial
} 