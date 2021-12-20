import { EventPartialList } from '../interfaces/Event'
import { error } from './error'
import { interactionCreate } from './interactionCreate'
import { ready } from './ready'

export const eventList: EventPartialList = {
  ready: ready,
  interactionCreate: interactionCreate,
  error: error
}
