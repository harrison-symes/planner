module.exports = (arr, key) => {
  const reduced = arr.reduce((table, item) => {
   table[item[key]] = item
   return table
   }, {})
  return Object.keys(reduced).map(id => arr.find(item => item[key] == id))
}
