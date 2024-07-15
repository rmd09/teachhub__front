import { create } from "zustand";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { getIsTeacher, getJWT, removeIsTeacher, removeJWT, setIsTeacher, setJWT } from "./api/jwt";
import { getMe } from "./api/api-utils";

export const useStore = create((set) => ({
    isAuth: false,
    user: null,
    jwt: null,
    isTeacher: null,

    login: (JWT, user, isTeacher) => {
        setJWT(JWT);
        setIsTeacher(isTeacher);
        set(() => ({ jwt: JWT, isTeacher: isTeacher, user: user, isAuth: true}));
    },
    logout: () => {
        set(() => ({ isAuth: false, user: null, jwt: null, isTeacher: null}));
        removeJWT();
        removeIsTeacher();
    },
    checkAuth: async() => {
        const jwt = getJWT();
        const isTeacher = getIsTeacher();
        if (jwt) {
            const user = await getMe(jwt, isTeacher ?? true); //на всякий случай
            if (user) {
                set(() => ({ jwt: jwt, isTeacher: isTeacher, user: user, isAuth: true}));
            }
            else {
                set(() => ({ isAuth: false, user: null, jwt: null, isTeacher: null}));
                removeJWT(); //logout
                removeIsTeacher();
            }
        }
    }
}));