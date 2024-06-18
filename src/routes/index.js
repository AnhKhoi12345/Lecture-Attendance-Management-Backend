import { createAccountRoute } from "./createAccount";
import { getAccountRoute } from "./getAllAccounts";
import { getAllModulesRoute } from "./getAllModules";
import { getAttendanceListRoute } from "./getAttendanceList";
import { getModulesClassesRoute } from "./getModuleClasses"; 
export default [
    getAllModulesRoute,
    getModulesClassesRoute,
    createAccountRoute,
    getAccountRoute,
    getAttendanceListRoute
];