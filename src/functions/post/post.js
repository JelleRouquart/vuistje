// const fetch = require('node-fetch')

// importen van deps
const shortid = require("shortid")
const querystring = require("querystring")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

exports.handler = async function(event, context) {
  try {
      // destructuren van 'link' post data
    const vuistje = querystring.parse(event.body);
    vuistje.id = shortid.generate();

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")
    const entry = await environment.createEntryWithId("vuist", vuistje.id, {
      fields: {
        to: {
          "en-US": vuistje.to,
        },
        from: {
          "en-US": vuistje.from,
        },
        message: {
          "en-US": vuistje.message,
        },
      },
    })

    await entry.publish();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "oke" }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
