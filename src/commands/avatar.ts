import { Command } from '../interfaces/Command'

const command: Command = {
  name: 'avatar',
  async execute (interactions): Promise<void> {
    const user = interactions.options.getUser('user')

    interactions.reply(`${user?.username}のアバターを出しますね！`)
    interactions.followUp(user?.displayAvatarURL({ size: 4096 }) ?? 'unknown')
  }
}

export = command
