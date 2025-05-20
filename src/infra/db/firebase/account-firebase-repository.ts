import { AccountListener, LoadAccountByEmailRepository, LoadAccountByTokenRepository } from '@/data/protocols'
import { FirebaseHelper } from './firebase-helper'
import { AddAccountListener } from '@/domain/usecases'

export class AccountFirebaseRepository implements AccountListener, LoadAccountByTokenRepository, LoadAccountByEmailRepository  {
  async listen (addAccount: AddAccountListener): Promise<AccountListener.Result> {
    const accountReference = FirebaseHelper.getReference('accounts')
    accountReference.on("child_added", async (snapshot) => {
        const { name, email } = snapshot.val();
        const account = await addAccount.add({ name, email })
        if (account !== null) {
          console.log(`Usuário ${name} salvo no MongoDB.`);
          return account
        }
        console.error("Erro ao salvar usuário")
        return null
      }
    )
    return null
  }

  async loadByToken (token: string): Promise<LoadAccountByTokenRepository.Result> {
    const { uid } = (await FirebaseHelper.client.auth().verifyIdToken(token))
    return { id: uid }
  }


  async loadByEmailAndPassword (email: string, password: string): Promise<LoadAccountByEmailRepository.Result> {
    const user = await FirebaseHelper.authenticateUser(email, password)
    if (user !== null) {
      console.log(`Usuário autenticado.`);
      return { accessToken: user.idToken }
    }
    console.error("Erro ao autenticar")
    return null
  }
}
