const express = require('express');
const app = express();
const users = require('./routes/users.js');

app.use('/api/v1/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
