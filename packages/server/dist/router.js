"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var Router = /** @class */ (function () {
    function Router(server) {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: "404 Not Found!"
            });
        });
        server.use('/', router);
    }
    return Router;
}());
exports.default = Router;
