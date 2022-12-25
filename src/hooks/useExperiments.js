export default (experiments, callback) => {
    const parseExperiments = (array) => array.map(callback)
        .sort((exp1, exp2) => new Date(exp2.props.date).getTime() - new Date(exp1.props.date).getTime())
    
    return [
        ...parseExperiments(experiments.filter(({ now }) => now)),
        ...parseExperiments(experiments.filter(({ now }) => !now))
    ]
}
