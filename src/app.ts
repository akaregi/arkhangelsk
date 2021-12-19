import { config } from 'dotenv'

import { getClient } from './boot/client'
import { eventList } from './events/eventList'

async function main () {
  // dotenv
  config()

  const client = await getClient()

  for (const [state, func] of Object.entries(eventList)) {
    client.on(state, func)
  }

  client.login(process.env['TOKEN'] ?? '')
}

main()
