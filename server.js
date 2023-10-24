import express from 'express' // importamos libreria express
import RouterLibros from './router/libros.js' //Importamos la clase Router

const app = express() 

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public')) // Para el index html




///--------------------------------------------------------------
///Api restfull libros-----------------------------------------
app.use('/api/libros' , new RouterLibros().start()) 



///Creamos el servidor express // Obligatorio
const PORT = 8080
const server = app.listen(PORT,()=>{console.log(`Servidor express escuchando en http://localhost:${PORT}`)
})
server.on('error', error => console.log(`Error en servidor : ${error.message}`))