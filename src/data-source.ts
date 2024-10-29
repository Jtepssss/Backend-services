import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const AppDataSource = new DataSource({
    type: "sqlite" , //Tipo de base de datos
    database : "database.sqlite", // Nombre de la base de datos
    synchronize: true, // Sincronizacion activa
    logging : false , //Sin incio de sesio en la BD
    entities :[Product] , // Se Agregan las Entidades Creadas 
    migrations : [] ,
    subscribers : [] ,

});
