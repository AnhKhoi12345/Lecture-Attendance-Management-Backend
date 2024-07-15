// import { notFound } from "@hapi/boom";
// import { db } from "../database";
import * as admin from 'firebase-admin';
// const { getAuth } = require('firebase-admin/auth');
 export const createFirebaseAccRoute ={
    method: 'POST',
    path: '/api/firebase/account',
    handler: async (req, h) => {
        const {uuid = '',username ='', email='',password=''} = req.payload;
         await admin.auth()
         .createUser({
            uid: uuid,
           email: email,
           emailVerified: false,
        //    phoneNumber: '+11234567890',
           password: password,
           displayName: username,
        //    photoURL: '',
           disabled: false,
         })
         .then((userRecord) => {
           // See the UserRecord reference doc for the contents of userRecord.
           console.log('Successfully created new user:', userRecord.uid);
         })
         .catch((error) => {
           console.log('Error creating new user:', error);
         });
         
         return {uuid,username,email,password}
    }
 }