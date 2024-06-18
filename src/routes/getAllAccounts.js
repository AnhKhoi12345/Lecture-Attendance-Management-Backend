import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const getAccountRoute ={
    method: 'GET',
    path: '/api/accounts',
    handler: async (req, h) => {
        const {results} = await db.query(
            'Select * from lam'
        );
        
        return results

    }
 }