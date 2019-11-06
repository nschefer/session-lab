const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'my-secrety-secret',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  console.log('SESSION: ', req.session);
  next();
})

app.use((req, res, next) => {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  next();
})

app.get('/', (req, res, next) => {
  res.send('Hello');
})

app.listen(8000, () => console.log('Listening on port 8000'))
