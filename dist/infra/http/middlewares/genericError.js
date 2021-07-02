"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericError = void 0;
var AppError_1 = require("@errors/AppError");
// middlewares que manipula error na aplicacao
function genericError(err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - " + err.message,
    });
}
exports.genericError = genericError;
