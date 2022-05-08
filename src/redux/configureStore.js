import { createStore } from 'redux'

const initialState = {
  repos: [],
  page: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      }
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page
      }
    default:
      return state
  }
}

export default createStore(reducer)