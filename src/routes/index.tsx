import StudyPage from "../pages/StudyPage/StudyPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForTeacher from "../components/registration/registration-for-teacher/registration-for-teacher";
import RegistrationForStudent from "../components/registration/registration-for-student/registration-for-student";
import LoginForTeacher from "../components/login/login-for-teacher/login-for-teacher";
import LoginForStudent from "../components/login/login-for-student/login-for-student";

export const RouteNames = {
    STUDY: '/',
    RESULTS: '/results',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    TEACHER_REGISTRATION: '/registration/teacher',
    STUDENT_REGISTRATION: '/registration/student',
    TEACHER_LOGIN: '/login/teacher',
    STUDENT_LOGIN: '/login/student',
}

export const publicRoutes = [
    {path: RouteNames.STUDY, component: <StudyPage/>},
    {path: RouteNames.RESULTS, component: <ResultsPage/>},
    {path: RouteNames.REGISTRATION, component: <RegistrationPage/>},
    {path: RouteNames.LOGIN, component: <LoginPage/>},
    {path: RouteNames.TEACHER_REGISTRATION, component: <RegistrationForTeacher/>},
    {path: RouteNames.STUDENT_REGISTRATION, component: <RegistrationForStudent/>},
    {path: RouteNames.TEACHER_LOGIN, component: <LoginForTeacher/>},
    {path: RouteNames.STUDENT_LOGIN, component: <LoginForStudent/>},
]
