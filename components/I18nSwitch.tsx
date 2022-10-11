import { useState } from 'react'
import { locales } from 'i18n'
import { useRouter } from 'next/router'
import { LanguageIcon } from '@heroicons/react/20/solid'
import setLanguage from 'next-translate/setLanguage'

const I18nSwitch = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const inactiveClasses =
    'group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center text-gray-900 hover:bg-gray-100 '
  const activeClasses = [inactiveClasses, 'bg-gray-200'].join(' ')

  return (
    <div className="relative inline-block text-center">
      <div>
        <button
          className="ml-1 flex h-6 w-6 items-center justify-center bg-transparent p-0 text-lg sm:ml-4 sm:mr-4"
          type="button"
          onClick={() => {
            setOpen((open) => !open)
          }}
        >
          <LanguageIcon />
        </button>
      </div>
      {open && (
        <div
          className="absolute right-0 z-20 mt-2 w-14 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="cursor-pointer py-1 px-1" role="none">
            {locales.map((locale) => (
              <button
                key={locale}
                className={locale == router.locale ? activeClasses : inactiveClasses}
                onClick={async () => await setLanguage(locale)}
              >
                <span role="none">{locale.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default I18nSwitch
