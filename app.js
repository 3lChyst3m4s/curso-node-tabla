/* // TABLA DE MULTIPLICAR DEL 5
const fs = require('fs');

console.clear();
console.log('=============');
console.log(' Tabla del 5 ');
console.log('=============');

const j = 5;
let salida = '';

for(i = 1; i <= 10; i++) {
    salida += ` ${j} x ${i} = ${j*i}\n`;
}

console.log(salida);

fs.writeFile('tabla-del-5.txt', salida, (err) => {
    if(err) throw err;
    console.log('Tabla-del-5 creado');
}) */

/*
// TABLA DE MULTIPLICAR DEL 3
const fs = require('fs');

console.clear();
console.log('=============');
console.log(' Tabla del 3 ');
console.log('=============');

const j = 3;
let salida = '';

for(i = 1; i <= 10; i++) {
    salida += ` ${j} x ${i} = ${j*i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-del-${j}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`Tabla del ${j} creado`);
}) 
*/

/* 
const {crearArchivo} = require('./helper/multiplicar')

console.clear();
const j = 1;

crearArchivo(j); 
*/

/*
const {crearArchivo} = require('./helper/multiplicar')

console.clear();
const j = 6;

crearArchivo(j)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err));
 */

// =====================  LINEA DE COMANDOS ========================

/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

const [,,arg3 = 'j=5'] = process.argv; //Tomando el tercer argumento
console.log(arg3);

const j = 6;
*/

/* 
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

const [,,arg3 = 'j=5'] = process.argv; //Tomando el tercer argumento
const [,j] = arg3.split('=');

console.log(j);
 */

/*
const {crearArchivo} = require('./helper/multiplicar')
console.clear();

const [,,arg3 = 'j=5'] = process.argv; //Tomando el tercer argumento
const [,j] = arg3.split('=');

console.log(j);

crearArchivo(j)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err))
*/

// ========== YARGS =====================

/* 
const {crearArchivo} = require('./helper/multiplicar')
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);
 */

/* 
const {crearArchivo} = require('./helper/multiplicar')
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);
console.log('j de yargs:',argv.j);
 */

/* 
const {crearArchivo} = require('./helper/multiplicar')
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number'  
        })
        .argv;

console.clear();

console.log(argv);
console.log('Base de yargs:',argv.b);
 */

/*
const {crearArchivo} = require('./helper/multiplicar')
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .argv;

console.clear();

console.log(argv);
console.log('Base de yargs:',argv.b);
*/

/*
const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .check((argv, options) => {
            if(isNaN(argv.b)) {
                throw 'La base debe ser un Numero'
            }
            return true;
        })
        .argv;

console.clear();

console.log(argv);
console.log('Base de yargs:',argv.b);
*/

/*
const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .check((argv, options) => {
            if(isNaN(argv.b)) {
                throw 'La base debe ser un Numero'
            }
            return true;
        })
        .argv;

console.clear();

console.log(argv);

crearArchivo(argv.b)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err));
*/

/* 
const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .check((argv, options) => {
            if(isNaN(argv.b)) {
                throw 'La base debe ser un Numero'
            }
            return true;
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false
        })
        .argv;

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err));
 */

/* 
const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err));
 */

/* 
const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch(err => console.log(err));
 */


const {option} = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch(err => console.log(err));