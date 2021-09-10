const { describe } = require('yargs');

const argv = require('yargs')
.option('b',{
   alias:'base',
   type:'number',
   demandOption:true,
   describe:'es la base de la tabla de multiplicar'
})
.option('l',{
   alias:'listar',
   type:'boolean',
   default:'false',
   describe:'muestra la tabla por consola'
})
.option('h',{
    alias:'limite',
    type:'number',
    default:'10',
    describe:'muestra el limite hasta cual numero multiplicar'
 })
.check((argv,options)=>{
   if(isNaN(argv.b)){
      throw 'la base tiene que ser un numero'
   }
   else if(isNaN(argv.h)){
       throw 'el limite tiene que ser un numero'
   }
   return true;
}).argv;

module.exports= argv;