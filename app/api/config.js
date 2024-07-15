export const BASE_URL = "http://localhost:3001";

export const endpoints = {
    teacherAuth: `${BASE_URL}/teacher/auth`,
    studentAuth: `${BASE_URL}/student/auth`,
    getTeacherInfo: `${BASE_URL}/teacher/me`,
    getStudentInfo: `${BASE_URL}/student/me`,
    teacherRegistr: `${BASE_URL}/teacher/registr`,
    studentRegistr: `${BASE_URL}/student/registr`
}