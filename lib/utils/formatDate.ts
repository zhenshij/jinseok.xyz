import siteMetadata from '@/data/siteMetadata'

const formatDate = (date: string, locale: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString(siteMetadata.languageCode[locale], options)
}

export default formatDate
