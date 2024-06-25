import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const getAllAccountRoute ={
    method: 'GET',
    path: '/api/accounts',
    handler: async (req, h) => {
        console.log("hi");
        const {results} = await db.query(
            'Select * from lam'
        );
        
        return results

    }
 }