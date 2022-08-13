const process = require('process');
const organizacionDeTareas = require('./funcionesDeTareas')
let ordenandoTareas = process.argv[2] && process.argv[2].toLowerCase();//listar,crear,filtrar, deshacer,undefined, default, todos en posicion 2

switch (ordenandoTareas){
  case 'listar':
    let misTareasTransformadas = organizacionDeTareas.leerJson()
    misTareasTransformadas.forEach(function(tarea, index){
    console.log(`\nTarea: ${misTareasTransformadas[index].titulo} \nEstado: ${misTareasTransformadas[index].estado}`)
    console.log('_________________________________')
  })
     break;
  case 'crear':
    let titulo = process.argv[3];
    let estado = process.argv[4];
    organizacionDeTareas.guardarTarea(titulo, estado)
    console.log('¡Creaste una nueva tarea!')
    break;
  case 'filtrar':
    let filtro = process.argv[3];
    let tareasFiltradas = organizacionDeTareas.filtrarPorEstado(filtro);
    console.log(`\nTAREAS FILTRADAS POR : ${filtro}`);
    console.log('_________________________________')
    tareasFiltradas.forEach(function(tarea){
      console.log(`Tarea: ${tarea.titulo}`);
      console.log('_________________________________')

    })
    break;
  case 'deshacer':
    organizacionDeTareas.deshacer();
    console.log('¡Borraste tu última tarea con éxito!');
    break;
  case undefined:
    console.log('Atención! Tienes que pasar una acción'); 
     break;
  default:
    console.log('No se que quieres hacer');  
     break;
}

