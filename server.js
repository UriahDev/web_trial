const express = require('express')
const path = require('path')

const app = express()
const port = 8000

//Import of various Routers
const homeRouter = require('./routes/homeRouter')
const loginRouter = require('./routes/loginRouter')

//Express middleware configurations
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('views'))

//Routes
app.use('/', homeRouter)
app.use('/login', loginRouter)

app.listen(port, () => console.log(`Server running on port: ${port}`))