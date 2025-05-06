import { DbAddAccountListener } from '@/data/usecases'
import { AccountMongoRepository, AccountFirebaseRepository } from '@/infra'

export const makeDbAddAccountListener = () => {
  try {
    const accountMongoRepository = new AccountMongoRepository()
    const addDbAccount = new DbAddAccountListener(accountMongoRepository, accountMongoRepository)
    const accountListener = new AccountFirebaseRepository()
    accountListener.listen(addDbAccount)
    console.error("Escutando evento de signup.")
  } catch (error) {
    console.error("Erro ao escutar evento de signup.")
  }
}
