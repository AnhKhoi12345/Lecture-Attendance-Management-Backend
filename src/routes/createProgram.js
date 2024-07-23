import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createProgramRoute ={
    method: 'POST',
    path: '/api/program',
    handler: async (req, h) => {
        const {program_id='', name ='',duration=''} = req.payload;
         await db.query(
            'INSERT INTO program ( program_id, name, duration)  VALUES (?,?,?);', [program_id, name, duration]
        );
        
        return {program_id, name, duration}

    }
 }