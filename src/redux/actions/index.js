import fetch from 'isomorphic-fetch'

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const SELECT_SEARCHFILTER = 'SELECT_SEARCHFILTER'
export const INVALIDATE_SEARCHFILTER = 'INVALIDATE_SEARCHFILTER'

export function selectSearchFilter(searchfilter) {
  return {
    type: SELECT_SEARCHFILTER,
    searchfilter
  }
}

export function invalidateSearchFilter(searchfilter) {
  return {
    type: INVALIDATE_SEARCHFILTER,
    searchfilter
  }
}

function requestLocations(searchfilter) {
  return {
    type: REQUEST_LOCATIONS,
    searchfilter
  }
}

function receiveLocations(searchfilter, json) {
  debugger
  const meter = Math.floor((Math.random() * 10) + 1);
  return {
    type: RECEIVE_LOCATIONS,
    searchfilter,
    locations: json.filter((child, i) =>  i % 10 == meter ).map((child) => child ),
    receivedAt: Date.now()
  }
}

function fetchLocations(searchfilter) {
  return dispatch => {
    dispatch(requestLocations(searchfilter))
    return fetch(`waypointsSample.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveLocations(searchfilter, json)))
  }
}

function shouldFetchLocations(state, searchfilter) {
  const locations = state.locationsBySearchFilter[searchfilter]
  if (!locations) {
    return true
  }
  if (locations.isFetching) {
    return false
  }
  return locations.didInvalidate
}

export function fetchLocationsIfNeeded(searchfilter) {
  return (dispatch, getState) => {
    if (shouldFetchLocations(getState(), searchfilter)) {
      return dispatch(fetchLocations(searchfilter))
    }
  }
}
