import { notFound } from "@hapi/boom";
import * as admin from 'firebase-admin';
import { db } from "../database";
import { unauthorized } from "@hapi/boom";
 export const getAccountRoute ={
    method: 'GET',
    path: '/api/account/{userId}',
    handler: async (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = req.params.userId;
        if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'Select * from lam where acc_id = ?', [userId],
        );
        console.log(results);
        return results

    }
 }