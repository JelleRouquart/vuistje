import React from 'react';

import Layout from "../components/layout"
import Content from "../components/content"

import Vuist from "../components/vuist"
import SEO from "../components/seo"

import { useQueryParams, StringParam } from "use-query-params"

const ShowPage = () => {
    cnost [id] = useQueryParams("id", StringParam)
    const vuistje = { from: "from", to: "to", message: "message" }

    return(
        <Layout>
            <SEO title="deel dit vuistje" />
            <Vuist />
            <p>{id}</p>
            <Content {...vuistje}/>
        </Layout>
    )
}

export default ShowPage