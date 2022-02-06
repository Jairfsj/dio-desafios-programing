//O que são vetores ou array

//Como declarar um array
/*let array = ['string, 1, true'];

console.log(array);*/

let array = ['string', 1, true,['array1'],['array2'],['array3'],['array4']];
//console.log(array) 

//ForEach 

/*array.forEach(function(item,index){console.log(item,index)});
*/
//Push

/*array.push('novo item');
console.log(array);*/ 

//Pop 

/*array.pop();
console.log(array);*/ 

//Shift 

/*array.shift();
console.log(array);*/ 

//Unshift

/*array.unshift('novo item');
console.log(array)*/ 

//Indexof

/*console.log(array.indexOf(true));*/ 

//Splice

/*array.splice(0, 3);
console.log(array);*/ 
/*let newArray = array.slice(0, 2);
console.log(newArray);*/ 

let object = {string:'string', number: 1, boolean : true, array: ["array"], objectInterno: {objectInterno : 'objeto interno'} }
console.log(object);

var string = object.string;
console.log(string);
