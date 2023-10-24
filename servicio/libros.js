
/* import ModelMem from '../model/librosMem.js' */
import ModelFile from '../model/librosFile.js'

class Servicio {
 constructor() {
    this.model = new ModelFile()
 }

    obtenerLibros = id => {
        const libros = this.model.obtenerLibros(id);
        return libros;
    }

    guardarLibro = libro => {
        const libroGuardado = this.model.guardarLibro(libro)
        return libroGuardado
    }


    actualizarLibro = (id, libro) => {
        const libroActualizado = this.model.actualizarLibro(id, libro)
        return libroActualizado
    }


    eliminarLibro = (id) => {
        const libroEliminado = this.model.eliminarLibro(id);
        return libroEliminado
    }



}



export default Servicio