export interface Character {
  id: number
  name: string
  image: Image
}

export interface TotalCharacters{
  info: {
    count: number
    pages: number
    next: string
    prev: null
  }
  results: CharacterDetail[]
}

export interface CharacterDetail {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: Image
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}


export interface Location {
  name: string
  url: string
}

export interface Image {
  src: string
  alt: string
}

export interface Biography {
  name: string
  status: string
  species: string
  gender: string
  image: Image
  location: Location
  origin: Origin
}

export interface Location {
  name: string
  url: string
}

export interface Origin {
  name: string
  url: string
}

export interface Form {
  id: number
  title: string
  author: string
}

export interface FormDelete {
  id: number
}