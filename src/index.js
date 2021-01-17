const express = require('express')
    // lay thong tin request gui len co dang ::1 - GET / HTTP/1.1 304 - - 5.475 ms
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))
    /**gui duoi dang du lieu tu form,cho phep submit form thong qua Post method tu client len server */
app.use(express.urlencoded({ extended: true }));
// gui duoi dang javascript
app.use(express.json());
//http logger
app.use(morgan('short'))

// set template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// routes init
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})