import { combineReducers } from 'redux'
import {
  SELECT_SEARCHFILTER, INVALIDATE_SEARCHFILTER,
  REQUEST_LOCATIONS, RECEIVE_LOCATIONS
} from '../actions'

function selectedSearchFilter(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SEARCHFILTER:
      return action.searchfilter
    default:
      return state
  }
}

function locations(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SEARCHFILTER:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.locations,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function locationsBySearchFilter(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_SEARCHFILTER:
    case RECEIVE_LOCATIONS:
    case REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        [action.searchfilter]: locations(state[action.searchfilter], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  locationsBySearchFilter,
  selectedSearchFilter
})

export default rootReducer
