const express = require('express')
const app = express()
const port = 5656

app.use(express.static('views'))
app.use(express.static('styles'))
app.use(express.static('scripts'))

app.set('view engine', 'pug')
app.get('/', (req, res) => res.render('index'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))