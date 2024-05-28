import { notFound } from "@hapi/boom";
import { db } from "../database";
export const getAllModulesRoute ={
    method: 'GET',
    path: '/api/modules',
    handler: async (req, h) => {
        const {results} = await db.query(
            'SELECT * FROM module'
        );
        if(!results)throw notFound("Module not found")
        return results;

    }
}