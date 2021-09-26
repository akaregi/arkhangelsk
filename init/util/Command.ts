import { Options } from './Options'

export interface Command {
  name: string
  description: string
  options?: Options | Options[]
}

export type Commands = Command[]
