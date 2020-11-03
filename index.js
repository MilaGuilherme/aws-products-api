const express = require('express');
const productsRouter = require('./routers/Products');
const { ConnectToDb } = require('./db/DbConnection');

const app = express();

app.use(express.json());
app.use('/products', productsRouter);

ConnectToDb()
    .then(() => {
        console.log('Connected to DB');
    }).catch(() => {
        console.log(error);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at Port:${port}`);
});