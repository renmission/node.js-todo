const path = require('path');
const express = require('express');
const mongooose = require('mongoose');
const dotenv = require('dotenv');
const methodOverride = require('method-override');

const todoRouter = require('./routes/todoRoutes');

const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

// DB options
const DBOptions = {
    useCreateIndex: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}

mongooose
    .connect(DB, DBOptions)
    .then(() => console.log('Database connected...'));

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'))

// routes
app.use('/', todoRouter);

const port = process.env.NODE_ENV || 3000;
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});