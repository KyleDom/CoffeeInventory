const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { sequelize } = require('./models');
const router = require('./routes/routes');
const app = express();

app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

sequelize.sync().then(() => {
    console.log('Connection succeeded');
  });

  
  app.get("/", (req, res) => {
    res.send("Welcome to the server WAHAHA!");
  });

//add routes
require("./routes/routes");

app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected!');
});