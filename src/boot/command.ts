import { join } from 'path'
import { Collection } from 'discord.js'
import { readdir } from 'fs/promises'
import { Command } from '../commands/Command'

export async function getCommands (): Promise<Collection<string, Command>> {
  console.log(process.cwd())

  const commandFiles = (await readdir(join(__dirname, '../commands')))
    .filter(file => file.endsWith('.ts') || file.endsWith('.js'))
    .map(file => file.slice(0, -3))
    .map(file => require(join(__dirname, '../commands', file)))

  // Registers available commands
  const commands = new Collection<string, Command>()

  for (const commandFile of commandFiles) {
    commands.set(commandFile.name, commandFile)
  }

  return commands
}
