import * as admin from 'firebase-admin';
import { db } from "../database";
import { notFound, unauthorized } from "@hapi/boom";
export const getLecturerByNameRoute ={
    method: 'GET',
    path: '/api/lecturer/{name}',
    handler: async (req, h) => {
        // const token = req.headers.authtoken;
        // const user = await admin.auth().verifyIdToken(token);
        const lecturer_name = req.params.name;
        // if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'select * from lecturer where  name = ?;', [lecturer_name]
        );
        if(!results)throw notFound("Lec  not found")
        return results;

    }
}