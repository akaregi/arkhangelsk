import { Interaction } from 'discord.js'

export async function interactionCreate (interaction: Interaction) {
  if (!interaction.isCommand()) {
    return
  }

  const command = interaction
    .client.commands.get(interaction.commandName)

  command?.execute(interaction)
}
