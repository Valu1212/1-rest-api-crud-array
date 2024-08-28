const express = require('express')
const app = express()
const port = 4000

let productos = []


//middle ware

app.use (express.json())

//rutas

app.get('/productos', (req,res)=>{
   //res.send(`listado de productos`)
    res.json(productos)
})

app.post('/productos', (req,res)=>{
    //res.send(`guardando nuevo producto`)
    console.log(req.body)
    res.json({mensaje:'prod agregado',
              producto:req.body           
    })
    console.log(productos.length+1)
    nuevoProducto={id:productos.length+1,...req.body}  //genera un id y le agrega una copia de req.body
    productos.push(nuevoProducto)

})


app.put('/productos', (req,res)=>{
    res.send(`actualizando de productos`)
})

app.delete('/productos', (req,res)=>{
    res.send(`eliminando un producto`)
})




app.listen(port, () =>{
    console.log("servidor corriendo")
})

