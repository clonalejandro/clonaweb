export const SET_REPOS = 'SET_REPOS'

export const setRepos = repos => ({
  type: SET_REPOS,
  repos,
})

export const loadRepos = () => async dispatch => {
  const repos = await fetch('https://api.github.com/users/clonalejandro/repos?sort="created"')
    .then(res => res.json())
  dispatch(setRepos(repos))
}