export const SET_REPOS = 'SET_REPOS'

export const setRepos = () => async dispatch => {
    const res = await fetch('https://api.github.com/users/clonalejandro/repos?sort="created"')
    const repos = await res.json()
    dispatch({
        type: SET_REPOS,
        repos,
    })
}
