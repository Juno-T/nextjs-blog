import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis massa ut mi sodales maximus. Praesent magna elit, pharetra nec rhoncus non, iaculis ac nulla. Maecenas tempor tellus ligula. Aenean non nunc in felis rutrum ullamcorper ut tincidunt urna. Nullam hendrerit mi mauris, eleifend eleifend tellus euismod et. Morbi ante elit, imperdiet et felis vel, iaculis luctus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{lorem}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href="/posts/first-post">
            <a>My page</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
