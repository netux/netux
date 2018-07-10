import * as moi from 'netux'


console.log(moi)

const pronoun = {
  subject: moi.sexual_orientation.sex == moi.Sex.Male ? 'he' : 'she',
  object: moi.sexual_orientation.sex == moi.Sex.Male ? 'him' : 'her'
}

const formatDate = (date: Partial<moi.Date>) =>
  `${ date.day || '??' }/${ date.month || '??' } / ${ date.year || '??' }`


console.log(`
----- Profile of ${ moi.name.first } ${ moi.name.last } -----
Nickname: ${ moi.nickname }
Birthday: ${ formatDate(moi.birthday) }
Sex: ${ moi.sexual_orientation.sex }
Gender: ${ moi.sexual_orientation.gender }
Website: ${ moi.website }
Public email: ${ moi.contact.email }
Discord: ${ moi.contact.discord.username }#${ moi.contact.discord.discriminator } (${ moi.contact.discord.id })

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
    `- ${ jobProfile.building || 'unknown building' } as ${ jobProfile.role || 'unknown role' } since ${ formatDate(jobProfile.since) }`
  )
  : `nowhere, ${ pronoun.subject } is job-less`
}

Was or is educated at:
${ moi.education.length > 0
  ? moi.education.map((educationProfile) =>
    `- ${ educationProfile.building || 'unknown building' } through ${ educationProfile.through.join(', ') } since ${ formatDate(educationProfile.since) } (where ${ pronoun.subject } started in ${ educationProfile.since.level })`
  )
  : `nowhere, ${ pronoun.subject } is uneducated or home-schooled`
}
-----------------------------------------------------------------
`.trim())
