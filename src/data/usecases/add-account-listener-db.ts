import { AddAccountListener } from '@/domain/usecases'
import { AddAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols'

export class DbAddAccountListener implements AddAccountListener {
  constructor (
    private readonly addAccountRepository: AddAccountRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository
  ) {}

  async add (accountData: AddAccountListener.Params): Promise<AddAccountListener.Result> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(accountData.email)
    let isValid = false
    if (!exists) {
      isValid = await this.addAccountRepository.add({ ...accountData })
    }
    if (!isValid) console.error("Usuário ja cadastrado na base de dados.")
    return isValid
  }
}
