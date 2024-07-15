import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createModuleRoute ={
    method: 'POST',
    path: '/api/module',
    handler: async (req, h) => {
        const {name='', capacity ='',etcs='',lecturer_id=''} = req.payload;
         await db.query(
            'INSERT INTO module ( name, capacity, etcs, lecturer_id) VALUES (?,?,?,?); ', [name, capacity, etcs, lecturer_id]
        );
        
        return {name, capacity, etcs, lecturer_id}

    }
 }