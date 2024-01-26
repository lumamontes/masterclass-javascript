const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3002

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!\n')
})

//closures

// Crie uma função construtora chamada "DatabaseError" que recebe dois parâmetros: "statement" e "message".
// Dentro do método "execute", caso o comando passado por parâmetro não exista, instancie a função construtora "DatabaseError", lançando-a como um erro.
// Envolva a chamada para o objeto "database" em um bloco try/catch imprimindo a propriedade "message" do objeto "DatabaseError".

function DatabaseError(statement, message) {
  this.statement = statement
  this.message = message
}
let database = {
  tables: {},
  createTable(expression) {
    const regexp = /(\w+\s?)\(([a-zA-Z ,]+)\)/g
    const result = regexp.exec(expression)
    const columns = {}

    result[2].split(', ').forEach((el) => {
      let dataLine = el.split(' ')
      columns[dataLine[0]] = dataLine[1]
    })

    this.tables[result[1].trim()] = {
      columns,
      data: [],
    }
  },
  execute(sqlQuery) {
    const operation = sqlQuery.split(' ')[0]
    if (operation === 'create') return this.createTable(sqlQuery)
    if (operation === 'insert') return this.insert(sqlQuery)

    throw new DatabaseError(sqlQuery, `Syntax error: ${sqlQuery}`)
  },
  insert(sqlQuery) {
    const tableName = sqlQuery.match(/into (\w+) \(/)[1]
    const columns = sqlQuery.match(/\((.+)\) values/)[1].split(', ')
    const columnsValues = sqlQuery.match(/values \((.+)\)/)[1].split(', ')
    const row = {}
    columns.forEach((column, index) => {
      row[column] = columnsValues[index]
    })

    this.tables[tableName].data.push(row)
  },
}

try {
  database.execute(
    'create table author (id number, name string, age number, city string, state string, country string)',
  )
  database.execute(
    'insert into author (id, name, age) values (1, Douglas Crockford, 62)',
  )
  database.execute(
    'insert into author (id, name, age) values (2, Linus Torvalds, 47)',
  )
  database.execute(
    'insert into author (id, name, age) values (3, Martin Fowler, 54)',
  )
  console.log(JSON.stringify(database.tables, undefined, ' '))
} catch (e) {
  console.log(e)
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
