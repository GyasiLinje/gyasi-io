import * as React from "react"

import { graphql, Link } from "gatsby";


export default function Blog({ data }) {
  const { posts } = data.blog
  return (
    <div>
      <h1>Gyasi's blog posts</h1>
      {
        posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
            </Link>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>
              {post.excerpt}
            </p>
          </article>
        ))
      }
    </div>
  )
}


export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`