"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first Route of APP
app.get('/', (req, res) => {
    // Send Hello World
    res.send('Welcome to API Restfull: APP Express + Nodemon + Jest + TS + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    // Send Hello World
    res.send('Welcome to GET Route: !Helloo2qwrfqwtfgqwtfg');
});
// Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
app.get('/prueba1', (req, res) => {
    res.send({ message: 'Goodbye, world' });
});
app.get('/prueba2/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}` });
});
/*
“data”: {
“message”: “Goodbye, world”

}
*/
/* cambie brwoser por node en .eslintrc*/
// app.get('/data', (req:Request, res:Response) => {
//     // res.sendStatus(200);
//     // res.send('purbeadfa');
//     return{ message: 'Goodbye, world' };
//     res.status(200);
//     // res.status(200).json({ message: 'Goodbye, world' })
// });
//# sourceMappingURL=index.js.map