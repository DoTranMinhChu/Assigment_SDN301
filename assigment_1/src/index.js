
import express from "express";
import api from './routers/index.js';

const app = express();

const PORT = '5000';
const HOSTNAME = 'localhost';

app.use(express.json())


//ROUTERS
app.use(api)

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});