import { EventList } from '../interfaces/Event'
import { error } from './error'
import { interactionCreate } from './interactionCreate'
import { ready } from './ready'

export const eventList: EventList = {
  ready: ready,
  interactionCreate: interactionCreate,
  error: error
}
