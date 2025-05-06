import { AddAccountListener } from '@/domain/usecases'

export interface AccountListener {
  listen: (addAccount: AddAccountListener) => Promise<AccountListener.Result>
}

export namespace AccountListener {
  export type Result = AddAccountListener.Params
}
