const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const handlebars = require('express-handlebars');

const router = require('./routers');



app.use(express.static(path.join(__dirname,'public')));
//middleware
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// HTTP logger
app.use(morgan('combined'));
//template engine
//cấu hình lại đuôi handlebars
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs'); 
//cấu hình đường dẫn view 
app.set('views', path.join(__dirname, 'resources/views'));


//router init
router(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})