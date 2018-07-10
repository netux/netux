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

  export enum EducativeInstitutionType {
    Elementary = 'Elementary',
    Secondary = 'Secondary',
    University = 'University'
  }

  export interface Date {
    day: number,
    month: Month,
    year: number
  }

  export interface EducationProfile {
    building?: string,
    through: EducativeInstitutionType[],
    since: Partial<Date> & { level: string }
  }

  export interface JobProfile {
    building?: string,
    role?: string,
    since: Partial<Date>
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

  /**
   * Locale codes (e.g. "en", "es-AR")
   */
  export const languages: string[]

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

  export const birthday: Partial<Date>

  export const social: {
    [ serviceId: string ]: SocialProfile
  }
}
