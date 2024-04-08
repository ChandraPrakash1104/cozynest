"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/user/userController"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('welcome user');
});
router.post('/login', userController_1.default.login);
router.post('/register', userController_1.default.register);
exports.default = router;
