const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!\n')
})

const frameworks = [
  {
    name: 'Angular',
    contributors: 1548,
  },
  {
    name: 'Ember',
    contributors: 746,
  },
  {
    name: 'Vue',
    contributors: 240,
  },
]

//Array iteration API
// forEach: itera sobre cada item do array
frameworks.forEach(function (framework) {
  console.log(framework.name)
})
// filter: retorna um novo array contendo somente os elementos que retornaram true na funcao passada como parametro
const result1 = frameworks.filter(function (framework) {
  return framework.contributors > 1000
})
console.log(result1)
// find: retorna o primeiro elemento que retornou true na funcao passada como parametro
const result2 = frameworks.find(function (framework) {
  return framework.name === 'Angular'
})
console.log(result2)
// some: retorna true se um ou mais elementos retonaram true na funcao passada como parametro
const result3 = frameworks.some(function (framework) {
  return framework.name.includes('e')
})
console.log(result3)
// every: retorna true se todos os elementos retornaram true na funcao passada como parametro
const result4 = frameworks.every(function (framework) {
  return framework.contributors > 1000
})
console.log(result4)
// map: retorna um novo array com base no retorno da funcao passada como parametro
const result5 = frameworks.map(function (framework) {
  return framework.name
})
console.log(result5)
// reduce: retorna um valor com base no retorno da funcao passada como parametro
const result = frameworks.reduce(function (total, framework) {
  return total + framework.contributors
})

console.log(result)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
