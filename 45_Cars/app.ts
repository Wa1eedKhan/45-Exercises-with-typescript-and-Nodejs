// Cars

import { features } from "process";


function storecarinfo(manufacturer : string ,modelname : string, ...extras: { [key : string]: any} []) : object{

    const  carinfo = {
        manufacturer,
        modelname,

        ...Object.assign({}, ...extras)
    
    }

  return carinfo;
}

let result= storecarinfo("honda","civic",{color:'white'}, {Features: [ 'Navigation',"Power window"]})
console.log(result);