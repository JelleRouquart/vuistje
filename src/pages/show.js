import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import ShareUrl from "../components/shareUrl"

import Vuist from "../components/vuist"
import SEO from "../components/seo"

import style from "./show.module.css"

import { useQueryParam, StringParam } from "use-query-params"

const ShowPage = ({ location }) => {
  const [id] = useQueryParam("id", StringParam)
  const [vuistje, setVuistje] = useState(null)
  const domain = location.origin ? location.origin : '';

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/.netlify/functions/show?id=${id}`)
      const data = await r.json()
      setVuistje(data)
    }
    getData()
  }, [id])

  return (
    <Layout>
      <SEO title="deel dit vuistje" />
      {vuistje ? (
        <>
          <Vuist />
          <ShareUrl value={`${domain}/vuistje/${id}`}/>
          <Content {...vuistje} />
        </>
      ) : (
        <p className={style.loading}>Vuisjte aan het ballen...</p>
      )}
    </Layout>
  )
}

export default ShowPage
