import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createModuleEnrollRoute ={
    method: 'POST',
    path: '/api/module-enroll',
    handler: async (req, h) => {
        const {student_id='', module_id =''} = req.payload;
         await db.query(
            'INSERT INTO module_enroll ( student_id, module_id) VALUES (?,?);', [student_id, module_id]
        );
        
        return {student_id, module_id}

    }
 }