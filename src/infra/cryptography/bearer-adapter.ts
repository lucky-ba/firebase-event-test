import { Decrypter } from '@/data/protocols'

export class BearerAdapter implements Decrypter {
  async decrypt (ciphertext: string): Promise<string> {
    if (!ciphertext || !ciphertext.startsWith('Bearer ')) {
      return null
    }
    return ciphertext.split('Bearer ')[1] as any
  }
}
