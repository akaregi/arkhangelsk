import { Commands } from './util/Command'

export const commands: Commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  },
  {
    name: 'avatar',
    description: 'Shows one\'s avatar.',
    options: [{
      name: 'user',
      description: 'The user to get',
      type: 6,
      required: true
    }]
  }
]
