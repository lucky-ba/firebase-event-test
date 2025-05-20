import { Authentication } from '@/domain/usecases'
import { LoadAccountByEmailRepository } from '@/data/protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result> {
    const { accessToken } = await this.loadAccountByEmailRepository.loadByEmailAndPassword(authenticationParams.email, authenticationParams.password)
    if (accessToken) return {
        accessToken
    }
    return null
  }
}
