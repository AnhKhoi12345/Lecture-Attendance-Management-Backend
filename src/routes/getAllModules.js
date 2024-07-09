import { notFound } from "@hapi/boom";
import { db } from "../database";
export const getAllModulesRoute ={
    method: 'GET',
    path: '/api/modules',
    handler: async (req, h) => {
        const {results} = await db.query(
            'select distinct module.module_id, module.name , lecturer.name as lecturer, semester.sem_type as semester, semester.start_date as semester_start_date, semester.end_date as semester_end_date from module inner join (lecturer, program_modules, semester) on (module.lecturer_id = lecturer.staff_id and module.module_id = program_modules.module_id and program_modules.sem_id = semester.sem_id) order by start_date; '
        );
        if(!results)throw notFound("Module not found")
        return results;

    }
}