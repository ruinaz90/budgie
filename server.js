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
            res.render('index.ejs', {})
        })

        app.post('/add-category', (req, res) => {
            budgets.insertOne({
                category: req.body.category,
                amount: Number(parseFloat(req.body.amount).toFixed(2))
            })
            .then(result => res.redirect('/'))
            .catch(error => console.error(error))
        })

        app.listen(3000, function() {
            console.log("listening on 3000")
        })
    })
    .catch(error => console.error(error))
