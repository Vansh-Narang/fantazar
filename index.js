const express = require('express');
const bodyParser = require('body-parser');
const orderRouter = require('./routes/order');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// app.get('/', (req, res) => [
//     res.send("Hello, world!"),
// ])
app.use('/order', orderRouter);

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})
