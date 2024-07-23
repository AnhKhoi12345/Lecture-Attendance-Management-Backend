import { createAccountRoute } from "./createAccount";
import {  createFirebaseAccRoute } from "./createFirebaseAccount.js";
import { createLecturerRoute } from "./createLecturer.js";
import { createModuleRoute } from "./createModule.js";
import { createProgramRoute } from "./createProgram.js";
import { createProgramModuleRoute } from "./createProgramModule.js";
import { createSemesterrRoute } from "./createSemester.js";
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
    createAccountRoute,
    getAllAccountRoute,
    getAttendanceListRoute,
    getAccountRoute,
    getStudentRoute,
    getLecturerRoute,
    getAllAttendanceListRoute,
    getAllNotifications,
    sendNotification,
    createFirebaseAccRoute,
    createModuleRoute,
    getLecturerByNameRoute,
    getModuleByNameRoute,
    getSemesterIdRoute,
    createProgramModuleRoute,
    createLecturerRoute,
    createSemesterrRoute,
    createProgramRoute,
];