

class ModelMem {
constructor() {
    this.libros = [
        {id: "1", titulo:"Queremos la séptima", autor: "La mitad mas uno", año : 2023} ,
        {id: "2", titulo:"El mago oscuro", autor: "Luis Advíncula", año : 2022} ,
        {id: "3", titulo:"Lluvia de primavera", autor: "Pablo Neruda", año : 1985} 
    ]

}

    obtenerLibros = id => {
        if (id) {
            const libro = this.libros.find(libro => libro.id == id)
            return libro || {}
        } else {
            return this.libros
        }
    }
    guardarLibro = (libro) => {
        libro.id = String(parseInt(this.libros[this.libros.length - 1]?.id || 0) + 1)
        libro.año = Number(libro.año)
        this.libros.push(libro)
        return libro

    }

    actualizarLibro = (id, libro) => {
        libro.id = id;

        const index = this.libros.findIndex(libro => libro.id === id)
        if (index != -1) {
            const libroAnterior = this.libros[index]
            const libroNuevo = { ...libroAnterior, ...libro }
            this.libros.splice(index, 1, libroNuevo)
            return libroNuevo
        }
        else {
            this.libros.push(libro)
            return libro
        }


    }


    eliminarLibro = (id) => {
        let libro = {}
        const index = this.libros.findIndex(libro => libro.id === id)
        if (index != -1) {
        libro = this.libros.splice(index, 1)[0]
        }
        return libro;

    }


}


export default ModelMem