import React from "react"
import Layout from "../components/layout"
import {rhythm} from "../utils/typography"
import { css } from "@emotion/core"
import { graphql, Link } from 'gatsby'

export default function Home({data}) {
  return (
    <Layout> 
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
                text-decoration: none;
                color: inherit;
            `}          
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
query BlogArticles {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        id
        html
        excerpt
        frontmatter {
          date
          title
        }
        fields{
          slug

        }
      }
    }
  }
}
`