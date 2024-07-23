import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createSemesterrRoute ={
    method: 'POST',
    path: '/api/semester',
    handler: async (req, h) => {
        const {sem_type='', start_date ='',end_date=''} = req.payload;
         await db.query(
            'INSERT INTO semester ( sem_type, start_date, end_date)  VALUES (?,?,?);', [sem_type, start_date, end_date]
        );
        
        return {sem_type, start_date, end_date}

    }
 }