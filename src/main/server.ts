import 'module-alias/register'
import env from '@/main/config/env'
import { MongoHelper, FirebaseHelper } from '@/infra'
import { makeDbAddAccountListener } from './factories';
import { serviceAccount } from "./config/firebaseServiceAccountKey";

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    console.log(`Connected in MongoDB`)
  })
  .catch(console.error)

FirebaseHelper.initialize(env.firebaseUrl, serviceAccount)
  .then(() => {
    makeDbAddAccountListener()
  })