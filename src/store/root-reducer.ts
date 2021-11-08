import { combineReducers } from 'redux';
import cardHolderReducer  from '../features/card/reducer'

export default combineReducers({
  cardHolder: cardHolderReducer
})
