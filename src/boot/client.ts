/// <reference types="../@types/discord" />
import { Client, Intents } from 'discord.js'
import { getCommands } from './command'

export async function getClient (): Promise<Client<boolean>> {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
  client.commands = await getCommands()

  return client
}
