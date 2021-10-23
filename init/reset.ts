import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { config } from 'dotenv'
import { CommandResponse } from './util/CommandResponse'

config()

const main = async () => {
  const rest = new REST({ version: '9' })
    .setToken(process.env['TOKEN'] ?? '')

  const packet = Routes.applicationGuildCommands(
    process.env['CLIENT_ID'] ?? '',
    process.env['GUILD_ID'] ?? ''
  )

  const commands = (await rest.get(packet)) as CommandResponse[]
  const ids = commands.map(command => command.id)

  console.log(ids)

  for (const id of ids) {
    const deletion = Routes.applicationGuildCommand(
      process.env['CLIENT_ID'] ?? '',
      process.env['GUILD_ID'] ?? '',
      id
    )

    await rest.delete(deletion)
  }
}

main()
