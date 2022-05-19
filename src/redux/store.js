import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  repos: [],
  page: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page
      }
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos,
      }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))