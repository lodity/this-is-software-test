export interface IUser {
  name: {
    first: string
    last: string
  }
  gender: string
  location: {
    city: string
    country: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }
  email: string
  picture: {
    large: string
  }
}
