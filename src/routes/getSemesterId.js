import * as admin from 'firebase-admin';
import { db } from "../database";
import { notFound, unauthorized } from "@hapi/boom";
export const getSemesterIdRoute ={
    method: 'GET',
    path: '/api/semester/{sem_type}/{sem_start}/{sem_end}',
    handler: async (req, h) => {
        // const token = req.headers.authtoken;
        // const user = await admin.auth().verifyIdToken(token);
        const sem_type = req.params.sem_type;
        const sem_start = req.params.sem_start;
        const sem_end = req.params.sem_end;
        // if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'select *  from semester where  sem_type = ? and start_date = ? and end_date = ?;', [sem_type,sem_start,sem_end]
        );
        if(!results)throw notFound("Semester  not found ")
        return results;

    }
}