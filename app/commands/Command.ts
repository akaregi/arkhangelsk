import { CommandInteraction } from 'discord.js'

export interface Command {
  name: string,
  execute: (interactions: CommandInteraction) => void
}
