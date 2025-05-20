import { AccountFirebaseRepository } from '@/infra/db'
import { DbAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'

export const makeDbAuthentication = (): Authentication => {
  const accountFirebaseRepository = new AccountFirebaseRepository()
  return new DbAuthentication(accountFirebaseRepository)
}
