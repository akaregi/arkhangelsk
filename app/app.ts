import { Client, Intents } from 'discord.js'
import { config } from 'dotenv'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

config()

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!')
  }
})

client.login(process.env['TOKEN'] ?? '')
