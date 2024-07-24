import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createProgramRegisteringRoute ={
    method: 'POST',
    path: '/api/program-registering',
    handler: async (req, h) => {
        const {student_id='', program_id ='',intake=''} = req.payload;
         await db.query(
            'INSERT INTO program_registering ( student_id, program_id, intake) VALUES (?,?,?);', [student_id, program_id, intake]
        );
        
        return {student_id, program_id, intake}

    }
 }