import * as cardHolderEpic from '../features/card/epics';
import { combineEpics } from 'redux-observable'

export default combineEpics(...Object.values(cardHolderEpic))
