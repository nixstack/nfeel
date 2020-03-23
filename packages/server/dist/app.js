"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var bodyParser = __importStar(require("body-parser"));
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.start = function (port) {
            return new Promise(function (resolve, reject) {
                _this.httpServer
                    .listen(port, function () {
                    resolve(port);
                })
                    .on('error', function (err) { return reject(err); });
            });
        };
        this.httpServer = express_1.default();
        this.httpServer.use(bodyParser.urlencoded({ extended: true }));
        this.httpServer.use(bodyParser.json());
        new router_1.default(this.httpServer);
    }
    return App;
}());
exports.default = App;
