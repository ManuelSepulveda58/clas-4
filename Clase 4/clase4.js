let numero =[28,4,6,3,9]
let mulp = numero.filter(num=>{return num % 2 === 0});
console.log(mulp);

let div = numero.map(num=>{return num /3});
console.log(div)

let acum = numero.reduce((total,num)=>{total+num;
return total+num;})
console.log(acum);

let nombre = ['Alejandra ','Manuel ','ragnar '];
let buenos= nombre.map(nombres=>{
    return nombres.concat(" Buenos dias ");
});
console.log(buenos);

let fil =nombre.filter(info=>{return info.startsWith("A")});
console.log(fil);

let datos = [1, 2, 3, 4, 5];
let suma = 0;

datos.forEach(num => {
    suma += num; 
});

const totalConCantidad = suma + datos.length; 
console.log(totalConCantidad);