import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import TableOfContent from '@/components/TableOfContent'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode, useState } from 'react'
import type { Blog, Authors } from 'contentlayer/generated'
import { Toc } from 'types/Toc'
import { useIntersectionObserver } from '@/lib/utils/useIntersectionObserver'

const editUrl = (slug) => `${siteMetadata.siteRepo}/blob/master/data/blog/${slug}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

interface Props {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
  toc: Toc
}

export default function PostLayout({ content, authorDetails, next, prev, children, toc }: Props) {
  const { slug, date, title, tags } = content
  const [tocActiveID, setTocActiveID] = useState('')
  useIntersectionObserver(setTocActiveID, content)

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...content}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="space-y-2">
                {tags && (
                  <div className="py-2 xl:py-2">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
                <div>
                  <dt className="sr-only">{siteMetadata.text.post.publishedOn}</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <div className="sticky top-64 hidden divide-y divide-gray-200 dark:divide-gray-700 lg:block">
              <TableOfContent toc={toc} tocActived={tocActiveID} />
            </div>
          </div>
          <footer>
            <div className="flex flex-col justify-between divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 lg:flex-row">
              {prev && (
                <div className="py-4 xl:pt-4">
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/blog/${prev.slug}`}>&larr; {prev.title}</Link>
                  </div>
                </div>
              )}
              {next && (
                <div className="py-4 sm:text-right xl:pt-4">
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/blog/${next.slug}`}>{next.title} &rarr;</Link>
                  </div>
                </div>
              )}
            </div>
          </footer>
          <Comments frontMatter={content} />
        </div>
      </article>
    </SectionContainer>
  )
}
