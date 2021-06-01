export const SITE_URL = 'https://demo.vercel.events'
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin
export const TWITTER_USER_NAME = 'vercel'
export const BRAND_NAME = 'Kinder Foos'
export const SITE_NAME_MULTILINE = ['Kinder', 'Foos']
export const SITE_NAME = 'Kinder Foos'
export const META_DESCRIPTION = 'Be kind to animals and kind to your feet.'
export const SITE_DESCRIPTION = 'All the vegan hiking boots on the internet'
export const DATE = 'October 27, 2020'
export const SHORT_DATE = 'Oct 27 - 9:00am PST'
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)'
export const TWEET_TEXT = META_DESCRIPTION
export const COOKIE = 'user-id'

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL
export const COPYRIGHT_HOLDER = 'Kinder Foos'

export const CODE_OF_CONDUCT = 'https://www.fionaoakesfoundation.co.uk/'
export const REPO = 'https://github.com/aaronago/kinderfoos'
export const SAMPLE_TICKET_NUMBER = 1234
export const NAVIGATION = [
  {
    name: 'Shoes',
    route: '/shoes',
  },
  {
    name: 'Sustainability',
    route: '/shoes',
  },
  {
    name: 'About KF',
    route: '/shoes',
  },
  {
    name: 'Contact',
    route: '/shoes',
  },
]

export type TicketGenerationState = 'default' | 'loading'
