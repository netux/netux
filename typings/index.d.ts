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
    Tertiary = 'Tertiary',
    University = 'University'
  }

  export interface Date {
    day: number,
    month: Month,
    year: number
  }

  export interface EducationProfile {
    type: EducativeInstitutionType,
    institution?: string,
    degree: string,
    since: Partial<Date> & { level: string }
    to?: Partial<Date> & { level: string }
  }

  export interface JobProfile {
    company: string,
    roles: string[],
    since: Partial<Date>
  }

  interface Profile {
    'service_name': string,
    /**
     * Includes username
     */
    'profile_url'?: string
  }

  export interface SocialProfile extends Profile {
    id?: string,
    username: string,
    'profile_url': string
  }

  export interface GamingProfile extends Profile {
    id?: string,
    username?: string
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

  export const sex: Sex;

  export const gender: Gender;

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

  export const gaming: {
    [ gameId: string ]: GamingProfile
  }
}
