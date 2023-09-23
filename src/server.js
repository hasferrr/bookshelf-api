const Hapi = require('@hapi/hapi')

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Homepage',
  })

  await server.start()
  // eslint-disable-next-line no-console
  console.log(`Server running on ${server.info.uri}`)
}

init()
