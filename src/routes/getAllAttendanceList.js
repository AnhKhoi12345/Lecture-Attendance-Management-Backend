import * as admin from 'firebase-admin';
import { notFound ,unauthorized} from "@hapi/boom";
import { db } from "../database";
export const getAllAttendanceListRoute ={
    method: 'GET',
    path: '/api/modules/{courseId}/{classDate}/lecturer/{userId}',
    handler:async  (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const courseId = req.params.courseId;
        const classDate = req.params.classDate;
        const userId = req.params.userId;
        if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'select distinct class.class_date, class.start_time , class.end_time ,module.module_id, module.name as module_name, lecturer.name as lecturer, semester.sem_type as semester, semester.start_date as semester_start_date, semester.end_date as semester_end_date, student.student_id , student.name as student_name from class inner join (module, lecturer, program_modules, semester, module_enroll, student,lam) on (class.class_date= ? and class.module_id = module.module_id  and  module.lecturer_id = lecturer.staff_id and module.module_id = program_modules.module_id and program_modules.sem_id = semester.sem_id and module.module_id = ?) order by class_date;',[classDate, courseId], );
            if(!results)throw notFound("Module not found")
            return  results;
    }
}