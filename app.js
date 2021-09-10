// tabla del 5 hasta el 10

const {crearArchivo}= require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();
/*console.log(process.argv);
const[,,arg3 = 'base=5'] = process.argv;
const [,numero=5]=arg3.split('=')
console.log(process.argv);
console.log(numero);
//const numero = 3;
*/
crearArchivo(argv.b,argv.l,argv.h).then(archivo=>{
   console.log(archivo.rainbow,'creado')
}).catch(err=>{console.log(err)})
