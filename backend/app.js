const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');

const swaggerConfig = require('./swagger.json');

const multerConfig = require('./config/multer');

const indexRouter = require('./routes/index');
const legendariesRouter = require('./routes/legendaries');

const FileController = require('./controllers/FileController');

const Logger = require('./middlewares/Logger');

const app = express();
const uploadFile = multer({storage: multerConfig});

app.use(session({
  secret: '9b99e32a1b7192927c8fb259559f88c2',
  resave: false,
  saveUninitialized: true,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// GET E POST
// http://localhost:3333/legendaries/
// http://localhost:3333/coaches/

// PUT E DELETE
// http://localhost:3333/legendaries/:id
// http://localhost:3333/coaches/:id

// GET DETALHADO
// http://localhost:3333/legendaries/:id

// GET DETALHADO ATRIBUTO
// http://localhost:3333/legendaries/:id/:attribute
// http://localhost:3333/coaches/:id/:attribute

// PATCH LEGENDARY NOME
// http://localhost:3333/legendaries/:id/:attribute
// http://localhost:3333/legendaries/1/description

// GET RELACIONAMENTO
// http://localhost:3333/coaches/:id/legendaries

app.use(Logger);
app.use('/', indexRouter);
app.use('/legendaries', legendariesRouter);
app.post('/files', uploadFile.single('file'), FileController.storeFile);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
