const express = require('express')
const app = express()
const port = 2505

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

const dashboardRouter = require('./src/routes/dashboard')
app.use('/', dashboardRouter)

const exchangeRatesRouter = require('./src/routes/exchangerates')
app.use('/exerates', exchangeRatesRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
