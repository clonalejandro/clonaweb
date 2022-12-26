const sortExperiments = array => array.sort((exp1, exp2) => new Date(exp2.date).getTime() - new Date(exp1.date).getTime())

export default (experiments, callback) => ([
    ...sortExperiments(experiments.filter(({ now }) => now)),
    ...sortExperiments(experiments.filter(({ now }) => !now))
].map(callback))
