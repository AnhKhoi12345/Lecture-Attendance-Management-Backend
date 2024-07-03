import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const sendNotification ={
    method: 'POST',
    path: '/api/notification',
    handler: async (req, h) => {
        const {sender_id ='',receiver_id='',noti_text=''} = req.payload;
         await db.query(
            'INSERT INTO lam_noti (sender_id, receiver_id, noti_text) VALUES (?,?,?); ', [sender_id, receiver_id, noti_text]
        );
        
        return {sender_id, receiver_id, noti_text}

    }
 }