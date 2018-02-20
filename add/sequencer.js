"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var sequencer_1 = __importDefault(require("../observable/sequencer"));
Observable_1.Observable.sequencer = sequencer_1.default;
