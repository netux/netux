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

  export enum Sex {
    Male = 'Male',
    Female = 'Female'
  }

  export enum Gender {
    Male = 'Male',
    Female = 'Female',
    AttackHelicopter = 'Attack Helicopter',
    NoBinary = 'No Binary',
    Other = 'Other'
  }

  export interface SocialProfile {
    id?: string
    username: string,
    'service_name': string,
    /**
     * Includes username
     */
    'profile_url': string,
  }


  export const nickname: string
  
  export const website: string

  export const name: {
    first: string,
    last: string
  }

  export const sexual_orientation: {
    sex: Sex,
    gender: Gender
  }
  
  export const education: EducationProfile[]

  export const jobs: JobProfile[]

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
