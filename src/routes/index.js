import { createAccountRoute } from "./createAccount";
import {  createFirebaseAccRoute } from "./createFirebaseAccount.js";
import { getAccountRoute } from "./getAccount";
import { getAllAccountRoute } from "./getAllAccounts";
import { getAllAttendanceListRoute } from "./getAllAttendanceList.js";
import { getAllModulesRoute } from "./getAllModules";
import { getAllNotifications } from "./getAllNotifications.js";
import { getAttendanceListRoute } from "./getAttendanceList";
import { getLecturerRoute } from "./getLecturerModule.js";
import { getModulesClassesRoute } from "./getModuleClasses"; 
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
    createFirebaseAccRoute
];