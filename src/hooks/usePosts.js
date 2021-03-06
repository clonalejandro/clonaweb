export default (repos, callback, count = 6, blackList = ['clonalejandro.github.io']) => 
  repos.filter(e => !blackList.includes(e.name))
              .slice(0, count)
              .map(callback)