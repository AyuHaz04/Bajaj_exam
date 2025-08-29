
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// BFHL API
const bfhlRouter = require('./users');
app.use('/bfhl', bfhlRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
