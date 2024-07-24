import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createIntakeRoute ={
    method: 'POST',
    path: '/api/intake',
    handler: async (req, h) => {
        const {year='',} = req.payload;
         await db.query(
            'INSERT INTO intake (year) VALUES (?);', [year]
        );
        
        return {year}

    }
 }