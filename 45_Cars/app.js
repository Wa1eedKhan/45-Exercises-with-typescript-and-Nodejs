"use strict";
// Cars
Object.defineProperty(exports, "__esModule", { value: true });
function storecarinfo(manufacturer, modelname, ...extras) {
    const carinfo = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extras));
    return carinfo;
}
let result = storecarinfo("honda", "civic", { color: 'white' }, { Features: ['Navigation', "Power window"] });
console.log(result);
