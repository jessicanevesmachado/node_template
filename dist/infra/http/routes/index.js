"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var users_routes_1 = require("./users.routes");
var router = express_1.Router();
exports.router = router;
router.use("/users", users_routes_1.usersRoutes);
