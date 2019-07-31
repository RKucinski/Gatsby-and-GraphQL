import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>Testing Gatsby and GraphQL by {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer