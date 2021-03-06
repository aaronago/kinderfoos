export type Image = {
  url: string
}

export type Speaker = {
  name: string
  bio: string
  title: string
  slug: string
  twitter: string
  github: string
  company: string
  talk: Talk
  image: Image
  imageSquare: Image
}

export type FeaturedImage = {
  node: {
    altText: string
    sourceUrl: string
  }
}

export type Brand = {
  title: string
}

export type RetailerACF = {
  searchUrl: string
}

export type Retailer = {
  databaseId: number
  title?: string
  retailerACF: RetailerACF
}

export type ShoeACF = {
  brand: [Brand]
  excerpt: string
  price: number
  gender: [string]
  retailers: [Retailer]
}

export type Shoe = {
  title: string
  databaseId: number
  slug: string
  featuredImage: FeaturedImage
  shoeACF: ShoeACF
}

export type Stage = {
  name: string
  slug: string
  stream: string
  discord: string
  schedule: Talk[]
}

export type Talk = {
  title: string
  description: string
  start: string
  end: string
  speaker: Speaker[]
}

export type Link = {
  url: string
}

export type Sponsor = {
  name: string
  description: string
  slug: string
  website: string
  callToAction: string
  callToActionLink: string
  links: SponsorLink[]
  discord: string
  tier: string
  cardImage: Image
  logo: Image
  youtubeSlug: string
}

export type SponsorLink = {
  text: string
  url: string
}

export type Job = {
  id: string
  companyName: string
  title: string
  description: string
  discord: string
  link: string
  rank: number
}

export type ConfUser = {
  id?: string
  email: string
  ticketNumber: number
  name?: string
  username?: string
  createdAt: number
}

export type GitHubOAuthData =
  | {
      type: 'token'
      token: string
    }
  | {
      type: 'user'
      name: string
      login: string
    }
