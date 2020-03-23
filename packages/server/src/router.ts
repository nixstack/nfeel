import * as express from 'express'

class Router {
  constructor(server: express.Express) {
    const router = express.Router()

    router.get('/', (req: express.Request, res: express.Response) => {
      res.json({
        message: `404 Not Found!`
      })
    })

    server.use('/', router)
  }
}

export default Router
