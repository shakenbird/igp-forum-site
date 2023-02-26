import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="post">
      <Head>
        <title>{post.title} | IGP Community Posts</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author.name} />
        <link rel="icon" href="/favicon.ico" />   
      </Head>
      <h1>{post.title}</h1>

      <div>
        <Image alt={post.author.name} src={post.author.profilePictureUrl} height={40} width={40} />

        <div>
          <strong>
            <Link href={post.author.permalink}>
              {post.author.name}
            </Link>
          </strong>

          <time dateTime={post.createdAt}>{prettyDate}</time>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const author = getAuthorBySlug(post.author)

  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}
