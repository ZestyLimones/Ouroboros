const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const AWS = require('aws-sdk');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create();

const sess = {
  secret: process.env.SECRETSESS,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT:${PORT}`));
});
