const fs = require('fs');

let organizacionDeTareas = {
    leerJson: function (){
    let misTareas = fs.readFileSync('./tareas.json', 'utf-8'); //leimos archivo json
    let misTareasTransformadas = JSON.parse(misTareas);    //lo parseamos para trabajarlo con js
    return misTareasTransformadas
    },
    guardarTarea: function (titulo, estado){
        let tareaNueva = {
            titulo: titulo,
            estado: 'pendiente',
        }
        let tareasOriginales = this.leerJson()
        tareasOriginales.push(tareaNueva);
        this.escribirJson(tareasOriginales);
    },
    escribirJson: function (datos){   //o tareasOriginales
    let jsonActualizado = JSON.stringify(datos);  //pasamos nuestro array a json
    fs.writeFileSync('./tareas.json', jsonActualizado, 'utf-8'); //escribirmos sobre nuestra DB los datos actualizados
    },
    filtrarPorEstado: function (estado){   //o leerPorEstado
    let tareas = this.leerJson()
    let tareasFiltradasPorEstado = tareas.filter((tarea) => tarea.estado == estado);
    return tareasFiltradasPorEstado
    },
    deshacer: function (){
        let tareas = this.leerJson()
        tareas.pop()
        this.escribirJson(tareas)
    }
}

module.exports = organizacionDeTareas



//, (error, dato) => !error ? console.log(dato) : console.log(error)