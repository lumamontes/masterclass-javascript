/* 
insert into author (id, name, age) values (1, Douglas Crockford, 62)
insert into author (id, name, age) values (2, Linus Torvalds, 47)
insert into author (id, name, age) values (3, Martin Fowler, 54)

No objeto "database", crie um método chamado "insert", que recebe o comando por parâmetro.
Na função "execute", invoque o método "insert".
Extraia o nome da tabela para a variável "tableName", as colunas para a variável "columns" e os valores para a variável "values".
Manipule os valores dentro "columns" e "values", separando-os um a um.
Crie um objeto chamado "row" com base nas colunas e valores.
Insira o objeto em "data".
*/

const DatabaseError = function(statement, message) {
    this.statement = statement;
    this.message = message;
};
const database = {
    tables: {},
    createTable(statement) {
        const regexp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regexp);
        let [,tableName, columns] = parsedStatement;
        this.tables[tableName] = {
            columns: {},
            data: []
        };
        columns = columns.split(",");
        for (let column of columns) {
            column = column.trim().split(" ");
            const [name, type] = column;
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(statement) {
        const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
        const parsedStatement = statement.match(regexp);
        let [,tableName, columns, values] = parsedStatement;
        columns = columns.split(", ");
        values = values.split(", ");
        let row = {};
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const value = values[i];
            row[column] = value;
        }
        this.tables[tableName].data.push(row);
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
        if (statement.startsWith("insert")) {
            return this.insert(statement);
        }
        const message = `Syntax error: "${statement}"`;
        throw new DatabaseError(statement, message);
    }
};
try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log(JSON.stringify(database, undefined, "  "));
} catch (e) {
    console.log(e.message);
}