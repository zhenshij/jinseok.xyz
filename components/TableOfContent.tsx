import { Toc } from 'types/Toc'
import useTranslation from 'next-translate/useTranslation'

interface TOCProps {
  toc: Toc
  tocActived: string
}

const TableOfContent = ({ toc, tocActived }: TOCProps) => {
  const { t } = useTranslation('common')
  const handleScrollToToc = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement
    const { offsetTop } = el
    window.scrollTo({
      top: offsetTop - 69,
      behavior: 'smooth',
    })
  }

  return (
    <div className="h-0 py-8 lg:block">
      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {t('toc')}
      </h2>
      <ul className="pt-2">
        {toc.map((heading) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <li
            key={heading.value}
            onClick={() => {
              handleScrollToToc(heading.url)
            }}
          >
            <span
              className={`${
                heading.url === tocActived ? 'font-bold' : 'font-normal'
              } cursor-pointer text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400`}
              style={{ marginLeft: `${heading.depth - 1}rem` }}
            >
              {heading.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContent
