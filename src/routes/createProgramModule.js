import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createProgramModuleRoute ={
    method: 'POST',
    path: '/api/program-module',
    handler: async (req, h) => {
        const {program_id='', module_id ='',sem_id='',intake=''} = req.payload;
         await db.query(
            'Insert into program_modules(program_id, module_id, sem_id, intake) values(?,?,?,?);', [program_id, module_id, sem_id, intake]
        );
        
        return {program_id, module_id, sem_id, intake}

    }
 }