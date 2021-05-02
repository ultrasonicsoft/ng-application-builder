"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_builder_1 = require("./command-builders/app-builder");
var project_model_1 = require("./models/project.model");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var zip_a_folder_1 = __importDefault(require("zip-a-folder"));
var fs_1 = __importDefault(require("fs"));
var child_process_1 = require("child_process");
// const { zip } = require('zip-a-folder');
var app = express_1.default();
var port = 8080; // default port to listen
app.use(express_1.default.json());
app.use(cors_1.default());
var builder = new app_builder_1.AppBuilder();
// builder.run(MockConfig);
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express_1.default.static('public'));
// define a route handler for the default home page
app.get("*", function (req, res) {
    // render the index template
    console.log('sending website...');
    res.sendfile('./public/index.html');
});
app.post("/generate-app", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var folderPath, projctModel, result, zipFileName, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('******* Generating new project:', req.body.name);
                folderPath = path_1.default.resolve(__dirname, '..') + '/' + req.body.name;
                console.log(folderPath);
                console.log('removing folder...', folderPath);
                child_process_1.execSync('rm -rf ' + folderPath);
                projctModel = new project_model_1.ProjectModel();
                projctModel.title = req.body.name;
                projctModel.description = 'Angular generator project';
                projctModel.template = 'angular-cli';
                projctModel.tags = ['stackblitz', 'sdk'];
                result = builder.generateProject(req.body, projctModel);
                if (!result) {
                    throw new Error('Invalid request...');
                }
                zipFileName = req.body.name + '.zip';
                return [4 /*yield*/, zip_a_folder_1.default.zip(req.body.name, zipFileName)];
            case 1:
                _a.sent();
                console.log(zipFileName);
                return [2 /*return*/, res.send(projctModel)];
            case 2:
                err_1 = _a.sent();
                // tslint:disable-next-line:no-console
                console.error(err_1);
                res.status(400).send({ error: err_1.message || err_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/download-app", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var folderPath, result, zipFileName_1, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('******* Generating new project:', req.body.name);
                folderPath = path_1.default.resolve(__dirname, '..') + '/' + req.body.name;
                console.log(folderPath);
                console.log('removing folder...', folderPath);
                child_process_1.execSync('rm -rf ' + folderPath);
                result = builder.generateProject(req.body);
                if (!result) {
                    throw new Error('Invalid request...');
                }
                zipFileName_1 = req.body.name + '.zip';
                return [4 /*yield*/, zip_a_folder_1.default.zip(req.body.name, zipFileName_1)];
            case 1:
                _a.sent();
                console.log(zipFileName_1);
                return [2 /*return*/, res.sendFile(zipFileName_1, { root: './' }, function (err) {
                        if (err) {
                            console.error(err);
                        }
                        else {
                            console.log('Sent:', zipFileName_1);
                            fs_1.default.unlinkSync(zipFileName_1);
                        }
                    })];
            case 2:
                err_2 = _a.sent();
                // tslint:disable-next-line:no-console
                console.error(err_2);
                res.json({ error: err_2.message || err_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// start the express server
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("server started at http://localhost:" + port);
});
