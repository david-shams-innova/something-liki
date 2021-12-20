import React from 'react'
import Layout from '../components/Layout'
import Header from "../components/header"
import InsightComponent from "../components/InsightComponent"
import InsightComponent2 from "./what-if"



export default function IndexPage() {
  return (
    <div>
      <Layout pageTitle={"Page Title"}>Gatsby</Layout>
      <Header>
        <InsightComponent />
      </Header>
      <InsightComponent2 />
    </div>
  )
}
