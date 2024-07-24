import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createClassRoute ={
    method: 'POST',
    path: '/api/class',
    handler: async (req, h) => {
        const {module_id='', class_date ='',start_time='',end_time=''} = req.payload;
         await db.query(
            'INSERT INTO class ( module_id, class_date, start_time, end_time) VALUES (?,?,?,?);', [module_id, class_date, start_time, end_time]
        );
        
        return {module_id, class_date, start_time, end_time}

    }
 }