import * as admin from 'firebase-admin';
import { notFound ,unauthorized} from "@hapi/boom";
import { db } from "../database";
export const getAllNotifications ={
    method: 'GET',
    path: '/api/modules/notifications/{userId}',
    handler:async  (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = req.params.userId;
        if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'select distinct lam_noti.noti_id, lam_noti.sender_id, lam_b.username as sender, lam_noti.receiver_id, lam_a.username as receiver, noti_text, noti_date from lam_noti inner join (lam as lam_a, lam as lam_b) on (lam_a.acc_id = ? and lam_a.school_id =lam_noti.receiver_id and lam_noti.sender_id = lam_b.school_id ) order by noti_date desc;',[userId], );
            if(!results)throw notFound("Notification not found")
            return  results;
    }
}