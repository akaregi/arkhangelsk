import { Command } from './Command'

const command: Command = {
  name: 'ping',
  async execute (interaction): Promise<void> {
    interaction.reply('ぽんっ!')
  }
}

export = command
