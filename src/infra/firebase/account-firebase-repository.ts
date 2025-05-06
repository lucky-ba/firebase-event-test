import { AccountListener } from '@/data/protocols'
import { FirebaseHelper } from './firebase-helper'
import { AddAccountListener } from '@/domain/usecases';

export class AccountFirebaseRepository implements AccountListener {
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
}
