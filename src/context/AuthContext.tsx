import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface User {
    id: number;
    full_name: string;
    email: string;
}

interface AuthContextValues {
    user: User | null | undefined;
    setUser: (user: User | null) => void;
    logOut: () => void;
    logIn: (email: string, password: string) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const AuthContext = createContext<AuthContextValues>({
    user: undefined,
    setUser: () => { },
    logOut: () => { },
    logIn: () => { },
    isLoading: true,
    setIsLoading: () => { }
})

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        refreshSession()
    }, [])

    function refreshSession(jwt?: string) {
        setIsLoading(true)
        let token = "" 
        if(!jwt) {
            token = localStorage.getItem('session') || ""
        }
        if (jwt) {
            token = jwt
        }
        if(token && token !== ""){
            const payload = token.split(".")[1];
            const user = JSON.parse(atob(payload))
            setUser({
                id: user.sub,
                full_name: user.full_name,
                email: user.email
            })
        }
        setIsLoading(false)
    }

    async function logIn(email: string, password: string) {
        try {
            setIsLoading(true)
            const res = await api.post('api/v1/users/login', { email, password })
            if (res.data) {
                localStorage.setItem('session', res.data)
                refreshSession(res.data)
            }
            setIsLoading(false)

        } catch (error) {
            alert(error)
        }
    }
    
    function logOut() {
        setIsLoading(true)
        setUser(null);
        localStorage.removeItem('session')
        window.location.href = '/'
        setIsLoading(false)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logOut, logIn, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { useAuth, AuthProvider };