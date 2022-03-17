import config from '../config.json'
export default callback => config.experiments.map(callback)
  .sort((exp1, exp2) => new Date(exp1.props.date).getTime() - new Date(exp2.props.date).getTime())
  .reverse()