import { AddAccountListener } from '@/domain/usecases'

export interface AddAccountRepository {
  add: (data: AddAccountRepository.Params) => Promise<AddAccountRepository.Result>
}

export namespace AddAccountRepository {
  export type Params = AddAccountListener.Params
  export type Result = boolean
}
