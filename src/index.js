const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.HTTP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(require('./routes'));

app.use(express.static(path.join(__dirname, 'files')))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});