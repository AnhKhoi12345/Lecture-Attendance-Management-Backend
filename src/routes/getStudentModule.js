import * as admin from 'firebase-admin';
import { db } from "../database";
import { notFound, unauthorized } from "@hapi/boom";
export const getStudentRoute={
    method: 'GET',
    path: '/api/modules/student/{userId}',
    handler: async (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = req.params.userId;
        if (user.user_id !== userId) throw unauthorized('no auth');
        const {results} = await db.query(
            'select distinct module.module_id, module.name,program_modules.program_id,lecturer.name as lecturer,program_modules.intake, semester.sem_type as semester, semester.start_date, semester.end_date from lam inner join (module_enroll, student, module, lecturer, semester, program_modules) on (lam.acc_id = ? and lam.school_id = module_enroll.student_id and module_enroll.student_id = student.student_id and module_enroll.module_id = module.module_id and module.lecturer_id = lecturer.staff_id and module.module_id = program_modules.module_id and program_modules.sem_id = semester.sem_id) order by start_date;', [userId]
        );
        if(!results)throw notFound("Module not found")
        return results;

    }
}