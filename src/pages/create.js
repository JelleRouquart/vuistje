import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Vuist from "../components/vuist"
import Form from "../components/form"

const CreatePage = () => (
  <Layout>
    <SEO title="create" />
      <Form />
      <Vuist height={15} />
  </Layout>
)

export default CreatePage
