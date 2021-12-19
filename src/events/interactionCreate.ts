import { Interaction } from 'discord.js'
import { getCommands } from '../boot/command'

export async function interactionCreate (interaction: Interaction) {
  if (!interaction.isCommand()) {
    return
  }

  // TODO: can be cached
  const commands = await getCommands()
  const command = commands.get(interaction.commandName)

  if (!command) {
    return
  }

  command.execute(interaction)
}
