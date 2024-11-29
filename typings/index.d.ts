declare module 'netux' {
  export const enum Month {
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

  export const enum Sex {
    Male = 'Male',
    Female = 'Female'
  }

  export const enum Gender {
    Male = 'Male',
    Female = 'Female',
    NonBinary = 'Non Binary',
    Other = 'Other'
  }

  export const enum EducativeInstitutionType {
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
    'profile_url': string,
    inactive?: boolean
  }

  export interface GamingProfile extends Profile {
    id?: string,
    username?: string,
    inactive?: boolean
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

  /**
   * Per locale
   */
  export const pronouns: {
    en: {
      subject: Lowercase<string>,
      object: Lowercase<string>
    }
    // TODO(netux): add pronouns for es-AR
  };

  export const education: EducationProfile[]

  export const jobs: JobProfile[]

  export const contact: {
    email: string[],
    discord: {
      id: number,
      username: string,
      discriminator?: number
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
