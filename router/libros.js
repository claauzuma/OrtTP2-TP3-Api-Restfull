
import express from 'express' /// Importamos la clase express
import Controlador from '../controlador/libros.js' //Importamos clase Controlador


///Api Restfull : Libros (Creamos rutas get,post,put, delete)

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador() // Creo una instancia de Controlador.

    }

    start() {
        this.router.get('/:id?', this.controlador.obtenerLibros)
        this.router.post('/', this.controlador.guardarLibro)
        this.router.put('/:id', this.controlador.actualizarLibro)
        this.router.delete('/:id', this.controlador.eliminarLibro)
        return this.router
    }
}

export default Router //exporto el router a server js





