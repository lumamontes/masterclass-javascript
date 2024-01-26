const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!\n')
})

const languages = ['Python', 'C', 'Java']

const ooLanguages = ['Smalltalk', 'C++', 'Simula']

const functionalLanguages = ['Haskell', 'Scheme', 'Clojure']
//retornam informacoes especificas sobre o array

//Primeira ocorrencia do elemento
// console.log(languages.indexOf('Python'))

//Ultima ocorrencia do elemento
// console.log(languages.lastIndexOf('Python'))

//Retorna true se o elemento existe no array
// console.log(languages.includes('Python'))

//concat retorna um novo array resultante da concatenacao de um ou mais arrays
const allLanguages = ooLanguages.concat(functionalLanguages)
// const allLanguages = [].concat(functionalLanguages, ooLanguages);
// console.log(allLanguages)

// slice: retorna partes de um determinado array de acordo com a posição de inicio e fim
// console.log(languages.slice(0, 2))
// console.log(languages.slice(1))

// join: converte array para uma stringify, juntando elementos com base em um separador
console.log(languages.join(';'))

//Retorna o primeiro elemento do array
// console.log(languages[0])

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
