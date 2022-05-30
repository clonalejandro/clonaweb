export default (array, pages) => {
    const arr = [...array]
    const paginated = []

    while (arr.length) paginated.push(arr.splice(0, pages))
    return paginated
}
