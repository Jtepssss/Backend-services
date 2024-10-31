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


//Crear metodo (POST) crear un producto 



export const createProduct = async(req:Request , res : Response ) => {

try{
    const {name,description , price} =req.body //Obteniedo datos del request
    const product = new Product ();

    product.name=name;
    product.description = description ;
    product.price = price ;
    await productRepository.save(product);
    res.status(201).json(product);

}catch(error){  
    res.status(500).json ({
        message:"error al crear el Producto."
    });
}


};

//Actualizar Datos UPTDATE (Put) crear un producto 



export const updateProduct = async(req:Request , res : Response ) => {

try{    
    const { name , description , price } =req.body;
    const product = await productRepository.findOneBy({
        id : parseInt(req.params.id)
    });

    if (product) {
        product.name= name ?? product.name ;
        product.description= description ?? description.name ;
        product.price= price ?? product.price ;
        await productRepository.save(product);
        res.json(product);
    } else {
        res.status(404).json({
            Message : "Producto No encontrado"    
    });
    
}
            
}catch(error){
    res.status(500).json({
        message : "Error al actualizar el producto"
    });

}


};

//Crear metodo delete(Delete) crear un producto 



export const deleteProduct = async(req:Request , res : Response ) => {

try{   
   
    const product = await productRepository.findOneBy({
        id : parseInt(req.params.id)
    });

    if (product) {
        
        await productRepository.remove(product);
        res.json({
            message : "producto elminado "
        });
    } else {
        res.status(404).json({
            Message : "Producto No encontrado"    
    });
    
}

}catch(error){  
    res.status(500).json({
        message : "Error al borrar el producto"
    });
}


};


 




