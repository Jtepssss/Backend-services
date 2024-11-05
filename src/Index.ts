import express , { Application, } from "express";

import cors from "cors" ;

import { AppDataSource } from "./data-source";

import router from "./routers/productRoutes";

 import swaggerUI from  "swagger-ui-express"

 import swaggerSpec from "./swagger/swagger";



const app : Application = express();
const PORT = process.env.PORT ?? 3000 ;

//middleware

app .use (cors());
app.use (express.json()) ;

//Rutas

app.use ("/api/",router) ; // Ruta de Productos 

//Documentacion del swagger 

app.use("/api-docs", swaggerUI.serve , swaggerUI.setup(swaggerSpec));

//inicializacion de la base de datos y servidor 

AppDataSource.initialize()
    .then( () => {
        app.listen(PORT,() => {
            console.log(`Servidor corriendo en  http://localhost:${PORT}\n`);
            console.log(` Endpoints:`);
            console.log(`API Products http://localhost:${PORT}/api/products\n`);
            console.log(`Docuemntacion:`);
            console.log(`swagger en http://localhost:${PORT}/api-docs`);
            
        });
    } )
    .catch( (error) => console.log(error) );


