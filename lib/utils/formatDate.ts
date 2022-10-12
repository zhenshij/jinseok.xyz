import siteMetadata from '@/data/siteMetadata'

const formatDate = (date: string, locale: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.languageCode[locale], options)

  return now
}

export default formatDate
