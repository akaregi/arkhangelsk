import { config } from 'dotenv'

import { getClient } from './boot/client'
import { getCommands } from './boot/command'

// Loads .env
config()

async function main () {
  // Spawns a new client
  const client = getClient()

  // Gets available commands
  const commands = await getCommands()

  // Event handling
  client.on('ready', () => {
    console.log(`Logged in as ${client?.user?.tag}!`)
  })

  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return

    const command = commands.get(interaction.commandName)

    if (!command) return

    command.execute(interaction)
  })

  client.login(process.env['TOKEN'] ?? '')
}

main()
