export const SET_REPOS = 'SET_REPOS'
export const SET_PAGE = 'SET_PAGE'

export const setRepos = repos => ({
  type: SET_REPOS,
  repos
})

export const setPage = page => ({
  type: SET_PAGE,
  page
})