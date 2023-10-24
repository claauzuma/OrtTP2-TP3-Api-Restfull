import fs from 'fs'


class ModelFile{
constructor() {
    this.nombreArchivo = 'libros.json'
}


 leerArchivo = nombre => {
    let libros = []

    try{
        libros = JSON.parse(fs.readFileSync(nombre, 'utf-8'))

    } 
    catch{

    }
    
  return libros;

}

 escribirArchivo = (nombre,libros) => {
    fs.writeFileSync(nombre, JSON.stringify(libros,null,'\t'))
}


 obtenerLibros = id => {
    try{
        const libros = this.leerArchivo(this.nombreArchivo)
        if(id) {
            const libro = libros.find(libro => libro.id === id)
            return libro || {}
            } else {
                return libros
            }
    }

    catch{
        return id? {} : []
    }
   
}

    guardarLibro = libro => {
        const libros = this.leerArchivo(this.nombreArchivo)
        libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
        libro.año = Number(libro.año)
        libros.push(libro)
        this.escribirArchivo(this.nombreArchivo, libros)

        return libro

    }

    actualizarLibro= (id,libro) => {
    libro.id = id;

    const libros = this.leerArchivo(this.nombreArchivo)

    const index = libros.findIndex( libro => libro.id === id)
    if(index != -1) {
        const libroAnterior = libros[index]
        const libroNuevo = {...libroAnterior, ...libro}
        libros.splice(index,1,libroNuevo)
        this.escribirArchivo(this.nombreArchivo,libros)

        return libroNuevo
    }
    else {
        libros.push(libro)
        this.escribirArchivo(this.nombreArchivo,libros)
        return libro
    }


}


 eliminarLibro = id => {
    let libro = {}

    const libros = this.leerArchivo(this.nombreArchivo)

    const index = libros.findIndex( libro => libro.id === id)
    if(index != -1) {
    libro = libros.splice(index,1)[0]
    this.escribirArchivo(this.nombreArchivo,libros)
    }
    return libro;

}


}


export default ModelFile