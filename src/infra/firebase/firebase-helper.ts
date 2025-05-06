import admin, { database, ServiceAccount } from "firebase-admin"

export const FirebaseHelper = {
  client: null as admin.app.App,

  async initialize (uri: string, serviceAccount: ServiceAccount): Promise<void> {
    const credential = admin.credential.cert(serviceAccount)
    this.client = admin.initializeApp({
      credential: credential,
      databaseURL: uri
    })
  },

  getReference (name: string): database.Reference {
      return this.client.database().ref(name)
  }
}
