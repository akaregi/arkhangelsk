import { Client } from 'discord.js'

export function ready (client: Client<boolean>): void {
  console.log(`Logged in as ${client?.user?.tag}!`)
}
