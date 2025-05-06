export interface AddAccountListener {
  add: (user: AddAccountListener.Params) => Promise<AddAccountListener.Result>
}

export namespace AddAccountListener {
  export type Params = {
    name: string
    email: string
  }

  export type Result = boolean
}
