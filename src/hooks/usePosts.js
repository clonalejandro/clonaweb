const usePosts = (repos, callback, count = 6, blackList = ['clonalejandro.github.io', 'clonalejandro', 'GitHubGraduation-2022']) =>
    (repos instanceof Array ? repos : [])
        .filter(e => !blackList.includes(e.name))
        .slice(0, count)
        .map(callback)

export default usePosts
