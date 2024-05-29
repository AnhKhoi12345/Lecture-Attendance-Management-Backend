
import { notFound } from "@hapi/boom";
import { db } from "../database";
export const getModulesClassesRoute ={
    method: 'GET',
    path: '/api/modules/{id}',
    handler:async  (req, h) => {
        const id = req.params.id;
        const {results} = await db.query(
            'select class.class_date, class.start_time , class.end_time ,module.module_id, module.name , lecturer.name as lecturer, semester.sem_type as semester, semester.start_date as semester_start_date, semester.end_date as semester_end_date from class inner join (module, lecturer, program_modules, semester) on (class.module_id = ? and class.module_id = module.module_id and  module.lecturer_id = lecturer.staff_id and module.module_id = program_modules.module_id and program_modules.sem_id = semester.sem_id) order by class_date;',[id], );
        // const module = results[0];
        if(!module) throw notFound(`Module does not exist with id ${id}`)
            // return  module;
        return  results;
    }
}