
import { notFound } from "@hapi/boom";
import { db } from "../database";
export const getModulesRoute ={
    method: 'GET',
    path: '/api/modules/{id}',
    handler:async  (req, h) => {
        const id = req.params.id;
        const {results} = await db.query(
            'SELECT * FROM module Where module_id=?',[id],
        );
        const module = results[0];
        if(!module) throw notFound(`Module does not exist with id ${id}`)
            return  module;
    }
}