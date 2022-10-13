import { useState, useRef, useEffect } from 'react'
import headerNavLinks from 'data/headerNavLinks'
import siteMetadata from 'data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const [stuck, setStuck] = useState(false)
  const ref = useRef<HTMLHeadElement>()

  const a = <div className="bg-[#fff1] backdrop-blur-md backdrop-filter"></div>
  const stuckClasses =
    'py-2 md:py-5 sticky -top-1 z-50 backdrop-filter backdrop-blur-md mx-auto border-b border-slate-900/10 dark:border-slate-300/10 w-full'
  const unstuckClasses =
    'py-2 md:py-8 sticky -top-1 z-50 mx-auto border-b border-b-0 border-slate-900/10 dark:border-slate-300/10 w-full'

  const classes = stuck ? stuckClasses : unstuckClasses

  useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1)
      },
      { threshold: [1.0] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [ref])

  return (
    <header className={classes} ref={ref}>
      <div
        className={`mx-auto flex items-center justify-between px-4 sm:px-6 xl:px-0 ${
          stuck ? 'max-w-5xl xl:max-w-8xl' : 'max-w-3xl xl:max-w-6xl'
        }`}
      >
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="h-6 text-2xl font-semibold sm:block "
        >
          {siteMetadata.author}
        </Link>

        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 hover:text-gray-500 dark:text-gray-200 dark:hover:text-white sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
export default Header
