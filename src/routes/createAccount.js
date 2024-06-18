import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createAccountRoute ={
    method: 'POST',
    path: '/api/accounts',
    handler: async (req, h) => {
        const {acc_id ='',school_id='', username ='',email='',password='',role=''} = req.payload;
         await db.query(
            'INSERT INTO lam (acc_id, school_id, username, email, password, role) VALUES (?,?,?,?,?,?); ', [acc_id,school_id, username, email, password, role]
        );
        
        return {acc_id,school_id, username, email, password, role}

    }
 }