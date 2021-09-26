export interface Options {
  name: string
  description: string
  type: number
  required?: boolean
  options?: Options | Options[]
}
