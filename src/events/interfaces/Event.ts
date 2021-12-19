// TODO: any 以外で処理したいところ

import { ClientEvents } from 'discord.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventFunction = (...args: any[]) => void

export type EventList = {
  [state in keyof ClientEvents]?: EventFunction
}
