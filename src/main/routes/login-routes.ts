import { adaptRoute } from '@/main/adapters'
import { makeLoginController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeLoginController()))
}
