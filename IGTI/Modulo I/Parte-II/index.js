import http from 'http'

http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/teste') {
      res.write('GET/ Get using /test is OK.')
      res.end()
    } else {
      res.write('Hello World, using http! ')
      res.statusCode = 200
      res.end()
    }
  })
  .listen(3000)
