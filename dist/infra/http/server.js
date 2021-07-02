"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var genericError_1 = require("./middlewares/genericError");
var routes_1 = require("./routes");
var app = express_1.default();
app.use(express_1.default.json()); // para aceitar requisição do tipo json
app.use(routes_1.router);
app.use(genericError_1.genericError);
app.listen(4444);
console.log('Servidor executando na porta 4444.');
