export interface LoadAccountByEmailRepository {
  loadByEmailAndPassword: (email: string, password: string) => Promise<LoadAccountByEmailRepository.Result>
}

export namespace LoadAccountByEmailRepository {
  export type Result = {
    accessToken: string
  }
}
