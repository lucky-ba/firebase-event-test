import 'module-alias/register'
import env from '@/main/config/env'
import { MongoHelper, FirebaseHelper } from '@/infra'
import { makeDbAddAccountListener } from './factories';
import { serviceAccount } from "./config/firebaseServiceAccountKey";

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const { setupApp } = await import('./config/app')
    const app = await setupApp()
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)

FirebaseHelper.initialize(env.firebaseUrl, serviceAccount)
  .then(() => {
    console.log(`Connected in Firebase`)
    makeDbAddAccountListener()
  })
  .catch(console.error)