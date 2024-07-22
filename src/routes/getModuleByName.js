import * as admin from 'firebase-admin';
import { db } from "../database";
import { notFound, unauthorized } from "@hapi/boom";
export const getModuleByNameRoute ={
    method: 'GET',
    path: '/api/module/{module_name}',
    handler: async (req, h) => {
        // const token = req.headers.authtoken;
        // const user = await admin.auth().verifyIdToken(token);
        const module_name = req.params.module_name;
        // if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'select * from module where  name = ?;', [module_name]
        );
        if(!results)throw notFound("Module  not found with name")
        return results;

    }
}