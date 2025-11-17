const express = require('express');
const cors = require('cors');
const countriesRouter = require('./routes/countries');

const app = express();
app.use(cors());
app.use('/api/countries', countriesRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend corriendo en http://localhost:${PORT}`);
});

module.exports = app;