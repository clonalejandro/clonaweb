import config from '../config.json'
export default callback => config.experiments.map(callback)