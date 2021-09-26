import { Client, Intents } from 'discord.js'

export function getClient () {
  return new Client({ intents: [Intents.FLAGS.GUILDS] })
}
