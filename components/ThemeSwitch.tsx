import { createDomMotionComponent } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

const Button = createDomMotionComponent('button')

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <Button
      className="ml-1 flex h-6 w-6 items-center justify-center bg-transparent p-0 text-lg sm:ml-4"
      whileHover={{
        scale: 1.2,
        rotate: 220,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.7,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <SunIcon className="hover:text-amber-600" />
      ) : (
        <MoonIcon className="hover:text-blue-500" />
      )}
    </Button>
  )
}

export default ThemeSwitch
