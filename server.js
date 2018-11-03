const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 4500;

app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
 });

//GRANT:

app.get('/not-items', (req, res) => {
  axios.get(`http://3.16.22.69/not-items`)
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.error(err)
  });
});

app.get('/product/:item', (req, res) => {
  axios.get(`http://3.16.22.69/product/:item`)
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.error(err)
  });
});

//KAI:

app.get("/listing/:id", (req, res) => {
  axios.get(`http://18.191.123.82/listing/:id`)
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.error(err)
  });
});

app.get("/api/:id", (req, res) => {
  axios.get(`http://18.191.123.82/api/:id`)
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.error(err)
  });
});

//WYATT:

app.get('/reviews', (req, res) => {
  axios.get(`http://ec2-18-191-75-80.us-east-2.compute.amazonaws.com/reviews`)
  .then((results) => {
    res.send(results.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

// -------------------

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
