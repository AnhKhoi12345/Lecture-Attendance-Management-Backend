import { notFound } from "@hapi/boom";
import { db } from "../database";
 export const createStudentRoute ={
    method: 'POST',
    path: '/api/student',
    handler: async (req, h) => {
        const {student_id='', name ='',image_location=''} = req.payload;
         await db.query(
            'INSERT INTO student ( student_id, name, image_location) VALUES (?,?,?);', [student_id, name, image_location]
        );
        
        return {student_id, name, image_location}

    }
 }