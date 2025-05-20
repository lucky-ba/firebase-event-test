import env from '@/main/config/env'
import { LoadAccountByToken } from '@/domain/usecases'
import { DbLoadAccountByToken } from '@/data/usecases'
import { AccountFirebaseRepository } from '@/infra/db'
import { BearerAdapter } from '@/infra/cryptography'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const bearerAdapter = new BearerAdapter()
  const accountFirebaseRepository = new AccountFirebaseRepository()
  return new DbLoadAccountByToken(bearerAdapter, accountFirebaseRepository)
}
