import * as moi from 'netux'

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1)

const formatDate = (date: Partial<moi.Date>) =>
  `${ date.day || '??' }/${ date.month || '??' }/${ date.year || '??' }`

const formatDiscordUser = (discord: { username: string; discriminator?: number }) =>
  discord.discriminator == null
    ? `@${ discord.username }`
    : `${ discord.username }#${ discord.discriminator }`


console.log(`
----- Profile of ${ moi.name.first } ${ moi.name.last } -----
Nickname: ${ moi.nickname }
Pronouns: ${ capitalize(moi.pronouns.en.object) }/${ capitalize(moi.pronouns.en.subject) }
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
  ).join('\n')
  : `nowhere, ${ moi.pronouns.en.subject } is anti-social`
}

Works at:
${ moi.jobs.length > 0
  ? moi.jobs.map((jobProfile) =>
    `- ${ jobProfile.company } as ${ jobProfile.roles.join(', ') } since ${ formatDate(jobProfile.since) }`
  ).join('\n')
  : `nowhere, ${ moi.pronouns.en.subject } is unemployed`
}

Was or is educated at:
${ moi.education.length > 0
  ? moi.education.map((educationProfile) =>
    `- ${ educationProfile.type } at ${ educationProfile.institution || '<redacted>' } since ${ formatDate(educationProfile.since) } (where ${ moi.pronouns.en.subject } started in ${ educationProfile.since.level })${ educationProfile.to ? ` and finished in ${ formatDate(educationProfile.to) } on ${ educationProfile.to.level }` : '' }`
  ).join('\n')
  : `nowhere, ${ moi.pronouns.en.subject } is uneducated or home-schooled`
}
-----------------------------------------------------------------
`.trim())
