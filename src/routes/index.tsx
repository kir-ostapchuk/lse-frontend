import StudyPage from "../pages/StudyPage/StudyPage";
import UserResultsPage from "../pages/UserResultsPage/UserResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForTeacher from "../components/registration/registration-for-teacher/registration-for-teacher";
import RegistrationForStudent from "../components/registration/registration-for-student/registration-for-student";
import LoginForTeacher from "../components/login/login-for-teacher/login-for-teacher";
import LoginForStudent from "../components/login/login-for-student/login-for-student";
import QuizPage from "../pages/QuizPage/QuizPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import NewQuizPage from "../pages/NewQuizPage/NewQuizPage";

export const RouteNames = {
    STUDY: '/',
    QUIZ: '/quizzes/:quizId',
    CREATE_QUIZ: '/quizzes/new',
    RESULTS: '/results',
    RESULTS_CURRENT_USER: '/results/me',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    NOT_FOUND: '/not-found',
    TEACHER_REGISTRATION: '/registration/teacher',
    STUDENT_REGISTRATION: '/registration/student',
    TEACHER_LOGIN: '/login/teacher',
    STUDENT_LOGIN: '/login/student',
}

export const publicRoutes = [
    { path: RouteNames.REGISTRATION, component: <RegistrationPage /> },
    { path: RouteNames.LOGIN, component: <LoginPage /> },
    { path: RouteNames.TEACHER_REGISTRATION, component: <RegistrationForTeacher /> },
    { path: RouteNames.STUDENT_REGISTRATION, component: <RegistrationForStudent /> },
    { path: RouteNames.TEACHER_LOGIN, component: <LoginForTeacher /> },
    { path: RouteNames.STUDENT_LOGIN, component: <LoginForStudent /> },
    { path: RouteNames.NOT_FOUND, component: <NotFoundPage /> },
]

export const protectedRoutes = [
    { path: RouteNames.STUDY, component: <StudyPage /> },
    { path: RouteNames.QUIZ, component: <QuizPage /> },
    { path: RouteNames.RESULTS_CURRENT_USER, component: <UserResultsPage /> },
]

export const teacherRoutes = [
    { path: RouteNames.RESULTS, component: <ResultsPage /> },
    { path: RouteNames.CREATE_QUIZ, component: <NewQuizPage /> },
]
