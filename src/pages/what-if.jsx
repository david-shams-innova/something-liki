import React from "react"
import { StaticQuery, graphql } from "gatsby"

const InsightComponent2 = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulInsights {
          edges {
            node {
              article {
                article
                id
              }
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default InsightComponent2
