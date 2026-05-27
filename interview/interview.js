// const { sum } = require("./math");

import os from "os";
import path from "path";
import fs from "fs";
import EventEmitter from "events";

import { sum } from "./math.js";

console.log(global);



// console.log("hello");
// console.log("hello");

const result = sum(1, 2);
console.log(result);

// this DOM api is only available in browser, we can't run this code in node.js
// const input = document.querySelector("#input");
// console.log(input);
