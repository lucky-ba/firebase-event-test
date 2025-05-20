import admin, { database, ServiceAccount } from "firebase-admin"
import axios from 'axios'
import env from "@/main/config/env"

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
  },

  async authenticateUser (email: string, password: string): Promise<AuthenticateUserResponse> {
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env.firebaseApiKey}`, {
        email,
        password,
        returnSecureToken: true
      });
  
      const { idToken, refreshToken, expiresIn, localId } = response.data;
  
      return { idToken, refreshToken, localId, expiresIn };
    } catch(error) {
      console.error(error)
      return null
    } 
  }
}

type AuthenticateUserResponse = {
  idToken: string
  refreshToken: string
  localId: string
  expiresIn: string
}