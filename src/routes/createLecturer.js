import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createLecturerRoute ={
    method: 'POST',
    path: '/api/lecturer',
    handler: async (req, h) => {
        const {staff_id='', name ='',program_id=''} = req.payload;
         await db.query(
            'INSERT INTO lecturer ( staff_id, name, program_id)  VALUES (?,?,?);', [staff_id, name, program_id]
        );
        
        return {staff_id, name, program_id}

    }
 }