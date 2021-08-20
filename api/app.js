const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index');
const cors = require('cors')
const app = express();

const option = {
      origin: "*",
      optionsSuccessStatus: 200
}



app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(option))
app.use('/api', indexRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {

      next(httpErrors(404));

});

// error handler
app.use((err, req, res, next) => {
      // // set locals, only providing error in development      
      //   res.locals.message = err.message;
      //   res.locals.error = req.app.get('env') === 'development' ? err : {};
      //   res.status(err.status || 500);
      res.json(err);
});

module.exports = app;
