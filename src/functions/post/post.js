// const fetch = require('node-fetch')

// importen van deps
const shortid = require("shortid")
const querystring = require("querystring")

exports.handler = async function(event, context) {
  try {
      // destructuren van 'link' post data
    const vuistje = querystring.parse(event.body);
    vuistje.id = shortid.generate();

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
