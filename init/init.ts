import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { config } from 'dotenv'

import { commands } from './command'

config()

const rest = new REST({ version: '9' })
  .setToken(process.env['TOKEN'] ?? '')

const main = async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(
      Routes.applicationGuildCommands(
        process.env['CLIENT_ID'] ?? '',
        process.env['GUILD_ID'] ?? ''
      ),
      { body: commands }
    )

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}

main()
