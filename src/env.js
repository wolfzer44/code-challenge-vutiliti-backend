import pckjson from '../package.json'
function getEnv () {
  if (!pckjson.production) return dev()
  return prod()
}

function dev () {
  return {
    database: {
      host: 'localhost',
      username: 'docker',
      password: 'docker',
      database: 'vutiliti'
    },

    server: {
      port: 3333
    }
  }
}

function prod () {
  return {
    database: {
      host: 'ec2-52-207-93-32.compute-1.amazonaws.com',
      username: 'bodtigclfimwfo',
      password: '04c0fad601f9b02ef0e6c29c52957df603b0e5c0a9cd6bb40dea57514958c720',
      database: 'db4reqv8lnnm1d'
    },

    server: {
      PORT: process.env.PORT
    }
  }
}

module.exports = getEnv
