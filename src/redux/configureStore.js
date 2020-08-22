import { createStore } from 'redux'

const initialState = {
  repos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      }
    default:
      return state
  }
}

export default createStore(reducer)