const express = require('express');
// const mongoose = require('mongoose');
const compression = require('compression');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const { Author } = require('./author');

const app = express();

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf8');
const { resolvers } = require('./resolvers/index');


app.use(compression());
app.use(cors());
app.use(bodyParser.json());


app.get('/author', (req, res) => {
  res.json(Author).end();
});

const Server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true,
  tracing: true,

  cacheControl: {
    defaultMaxAge: 5
  },
  introspection: true,
  playground: true,
  context: ({ req }) => {

    let token = req.headers.authorization;
    console.log("Token: " + token);
    return {
      Author
    }
  }
});

const PORT = process.env.PORT || 5000;

Server.applyMiddleware({
  app,
  path: '/graphql'
});

app.listen({ port: PORT }, () => {
  console.log(`Apollo Server on ${PORT}`);
});


