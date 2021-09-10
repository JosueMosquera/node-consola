const fs = require("fs");
require("colors");
const crearArchivo = async (numero = 5, listar = false, limite = 10) => {
  try {
    let salida,
      consola = "";
    for (x = 1; x <= limite; x++) {
      salida += `${numero} x ${x} = ${numero * x}\n`;
      consola += `${numero} ${"x".green} ${x} ${"=".red} ${numero * x}\n`;
    }
    if (listar) {
      console.log("=================");
      console.log(`Tabla del ${numero}`);
      console.log("=================");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
    return `tabla-${numero}.txt`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo: crearArchivo,
};
