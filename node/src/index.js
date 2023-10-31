const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 80

const config = {
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'node'
}

const getUsers = async () => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);

    connection.query('INSERT INTO people(name) VALUES (?)', ['Mateus'], (err) => {
      if (err) {
        connection.end();
        reject(err);
        return;
      }

      connection.query('SELECT * FROM people', (err, rows) => {
        connection.end();
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  });
}

app.get('/', async (req, res) => {
  const users = await getUsers();
  
  const elements = users.map(({name}) => `<li>${name}</li>`)
  const response = `<h1>Full Cycle Rocks!</h1><ul>${elements.join(' ')}</ul>`

  return res.send(response)
})

app.listen(port, () => {
	console.log("Running on port " + port)
})