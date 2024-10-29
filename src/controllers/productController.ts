import {Request , Response} from  "express" ;

import { AppDataSource } from "../data-source";

import { Product } from "../entities/Product";

const productRepository = AppDataSource.getRepository(Product) ;

//obtener o hacer un (get) de todos los productos 

export const getAllProducts = async (req:Request , res:Response) => {
    try {
    
        const products = await productRepository.find();
        res.json(products);}
    catch (error){
            res.status(500).json({message:"Error al encontrar el Producto"})

        
    }
}


//Obtener (get) producto o id 
export const getProductsByID = async(req:Request , res:Response) => {

    try{
        const product = await productRepository.findOneBy({
            id : parseInt(req.params.id)
    
        }); 

        if(Product) {
            res.json(product); }
            else{ 
                 res.status(404).json({ message:"producto no encontrado"})
                
            }
        }catch(error) {
            res.status(500).json({message:"Error al encontrar el Producto"})
        }    




}






