import { Client, Intents } from 'discord.js'

export function getClient (): Client<boolean> {
  return new Client({ intents: [Intents.FLAGS.GUILDS] })
}
