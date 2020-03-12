import { Router } from 'express'
import { login } from './controller/auth/authentication.controller'
import { store, index } from './controller/random/random.controller'

import authMiddleware from './middleware/authentication.middleware'

const routes = Router()

routes.post('/random', authMiddleware, store)
routes.get('/random', authMiddleware, index)
routes.post('/auth', login)

export default routes
