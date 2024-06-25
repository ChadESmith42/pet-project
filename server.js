const express = require('express');
const petRouter = require('./routers/pet.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use('/api/pet', petRouter);

app.listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}.`);
});