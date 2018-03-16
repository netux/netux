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
    id?: string
    username: string,
    'service-name': string,
    /**
     * Includes username
     */
    'profile-url': string,
  }


  export const nickname: string
  
  export const website: string

  export const name: {
    first: string,
    last: string
  }

  export const gender: string

  export const sex: string

  export const work: {
    studying: boolean,
    at: string
  }

  export const contact: {
    email: string[],
    discord: {
      id: string,
      username: string,
      discriminator: string
    }
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
