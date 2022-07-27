const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()
const connectionString = 'mongodb+srv://admin:pass@cluster0.1brh5bj.mongodb.net/?retryWrites=true&w=majority'

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))

MongoClient.connect(connectionString, {
    useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to database")
        const db = client.db('Budgie')
        const budgets = db.collection('budgets')

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })

        app.listen(3000, function() {
            console.log("listening on 3000")
        })
    })