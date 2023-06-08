import * as moi from 'netux'

const pronoun = {
  subject: moi.sex == moi.Sex.Male ? 'he' : 'she',
  object: moi.sex == moi.Sex.Male ? 'him' : 'her'
}

const formatDate = (date: Partial<moi.Date>) =>
  `${ date.day || '??' }/${ date.month || '??' } / ${ date.year || '??' }`

const formatDiscordUser = (discord: { username: string; discriminator?: number }) =>
  discord.discriminator == null
    ? `@${ discord.username }`
    : `${ discord.username }#${ discord.discriminator }`


console.log(`
----- Profile of ${ moi.name.first } ${ moi.name.last } -----
Nickname: ${ moi.nickname }
Birthday: ${ formatDate(moi.birthday) }
Sex: ${ moi.sex }
Gender: ${ moi.gender }
Website: ${ moi.website }
Public email: ${ moi.contact.email }
Discord: ${ formatDiscordUser(moi.contact.discord) } (${ moi.contact.discord.id })

Social media:
${ Object.values(moi.social).length > 0
  ? Object.values(moi.social).map((socialProfile) =>
    `- ${ socialProfile.service_name } as ${ socialProfile.username } (${ socialProfile.profile_url })${ socialProfile.id ? `( with ID ${ socialProfile.id })` : '' }`
  )
  : `nowhere, ${ pronoun.subject } is anti-social`
}

Works at:
${ moi.jobs.length > 0
  ? moi.jobs.map((jobProfile) =>
    `- ${ jobProfile.company } as ${ jobProfile.roles.join(', ') } since ${ formatDate(jobProfile.since) }`
  )
  : `nowhere, ${ pronoun.subject } is unemployed`
}

Was or is educated at:
${ moi.education.length > 0
  ? moi.education.map((educationProfile) =>
    `- ${ educationProfile.type } at ${ educationProfile.institution || '<redacted>' } since ${ formatDate(educationProfile.since) } (where ${ pronoun.subject } started in ${ educationProfile.since.level })${ educationProfile.to ? ` and ended in ${ formatDate(educationProfile.to) } on ${ educationProfile.to.level }` : '' }`
  )
  : `nowhere, ${ pronoun.subject } is uneducated or home-schooled`
}
-----------------------------------------------------------------
`.trim())
