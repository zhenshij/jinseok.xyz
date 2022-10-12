import React, { useEffect, useRef } from 'react'
import { CoreContent } from '@/lib/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const useIntersectionObserver = (
  setTocActiveID: React.Dispatch<React.SetStateAction<string>>,
  content: CoreContent<Blog>
) => {
  const headingElementsRef = useRef({})

  useEffect(() => {
    console.log('Start')
    headingElementsRef.current = {}

    const callback: IntersectionObserverCallback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings: IntersectionObserverEntry[] = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]

        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1) {
        setTocActiveID('#' + visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        )
        setTocActiveID('#' + sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-64px 0px -40% 0px',
    })

    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'))
    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [content, setTocActiveID])
}
