
import Servicio from'../servicio/libros.js'


class Controlador {
   constructor(){
      this.servicio = new Servicio()
   }
    
 obtenerLibros = (req,res) => {
    const {id} = req.params  ///Le paso el parametro de la url, si tiene
    const libros = this.servicio.obtenerLibros(id)
    res.json(libros)
    }

 guardarLibro = (req,res) => {
    const libro = req.body   //Me pasan un libro del body del req
    const libroGuardado = this.servicio.guardarLibro(libro)
    res.json(libroGuardado)
    
}

 actualizarLibro = (req,res) => {
    const { id } = req.params
    const libro = req.body
    const libroActualizado = this.servicio.actualizarLibro(id,libro)
    res.json(libroActualizado)
    
}

 eliminarLibro = (req,res) => {
    const { id } = req.params
    const libroEliminado = this.servicio.eliminarLibro(id)
    res.json(libroEliminado)
}

}

export default Controlador




