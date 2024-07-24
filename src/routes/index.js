import { createAccountRoute } from "./createAccount";
import { createClassRoute } from "./createClass.js";
import {  createFirebaseAccRoute } from "./createFirebaseAccount.js";
import { createIntakeRoute } from "./createIntake.js";
import { createLecturerRoute } from "./createLecturer.js";
import { createModuleRoute } from "./createModule.js";
import { createModuleEnrollRoute } from "./createModuleEnroll.js";
import { createProgramRoute } from "./createProgram.js";
import { createProgramModuleRoute } from "./createProgramModule.js";
import { createProgramRegisteringRoute } from "./createProgramRegistering.js";
import { createSemesterrRoute } from "./createSemester.js";
import { createStudentRoute } from "./createStudent.js";
import { getAccountRoute } from "./getAccount";
import { getAllAccountRoute } from "./getAllAccounts";
import { getAllAttendanceListRoute } from "./getAllAttendanceList.js";
import { getAllModulesRoute } from "./getAllModules";
import { getAllNotifications } from "./getAllNotifications.js";
import { getAttendanceListRoute } from "./getAttendanceList";
import { getLecturerByNameRoute } from "./getLecturerByName.js";
import { getLecturerRoute } from "./getLecturerModule.js";
import { getModuleByNameRoute } from "./getModuleByName.js";
import { getModulesClassesRoute } from "./getModuleClasses"; 
import { getSemesterIdRoute } from "./getSemesterId.js";
import { getStudentRoute } from "./getStudentModule.js";
import { sendNotification } from "./sendNotification.js";
export default [
    getAllModulesRoute,
    getModulesClassesRoute,
    getLecturerByNameRoute,
    getModuleByNameRoute,
    getSemesterIdRoute,
    getAllAccountRoute,
    getAttendanceListRoute,
    getAccountRoute,
    getStudentRoute,
    getLecturerRoute,
    getAllAttendanceListRoute,
    getAllNotifications,
    sendNotification,
    createAccountRoute,
    createFirebaseAccRoute,
    createModuleRoute,
    createProgramModuleRoute,
    createLecturerRoute,
    createSemesterrRoute,
    createProgramRoute,
    createClassRoute,
    createStudentRoute,
    createProgramRegisteringRoute,
    createModuleEnrollRoute,
    createIntakeRoute,
];