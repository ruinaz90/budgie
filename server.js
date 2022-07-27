const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const connectionString = 'mongodb+srv://admin:pass@cluster0.1brh5bj.mongodb.net/?retryWrites=true&w=majority'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

MongoClient.connect(connectionString, {
    useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to database")
        const db = client.db('Budgie')
        const budgets = db.collection('budgets')

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })

        app.post('/add-category', (req, res) => {
            console.log("Add category")
            res.redirect('/')
        })

        app.listen(3000, function() {
            console.log("listening on 3000")
        })
    })