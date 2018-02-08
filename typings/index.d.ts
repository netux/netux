declare module 'netux' {
  export enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
  }

  export interface SocialProfile {
    'service-name': string,
    /**
     * Includes username
     */
    'profile-url': string,
    username: string,
    id?: string
  }


  export const nickname: string
  
  export const website: string

  export const name: {
    first: string,
    last: string
  }

  export const contact: {
    email: string
  }

  export const birthday: {
    day: number,
    month: Month,
    year?: number
  }

  export const social: {
    [ serviceId: string ]: SocialProfile
  }
}
